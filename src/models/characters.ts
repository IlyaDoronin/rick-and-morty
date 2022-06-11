import { createStore, createEffect } from "effector";
import { ICharacter } from "../interfaces/character";
import { urls } from "../urls";

// Запрос всех персонажей
export const getCharactersFx = createEffect(async (charactersUrl: string[]) => {
    // Генерация строки с номерами всех персонажей из эпизода
    const charactersNum = charactersUrl
        .reduce((acc, url) => [...acc, url.split("/").pop()], [])
        .join(",");

    // Запрос нужных персонажей
    const req = await fetch(`${urls.base}${urls.character}/${charactersNum}`);
    const characters = await req.json();

    return characters;
});

// Хранилище массива всех персонажей из эпизода
export const $characters = createStore<ICharacter[]>([]);

const updateCharacters = (state: ICharacter[], characters: ICharacter[]) =>
    characters;

$characters.on(getCharactersFx.doneData, updateCharacters);
