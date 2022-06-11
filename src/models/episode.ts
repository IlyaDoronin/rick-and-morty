import { createStore, createEffect } from "effector";
import { IEpisode } from "../interfaces/episode";
import { urls } from "../urls";

// Запрос информации об эпизоде
export const getEpisodeFx = createEffect(async (id: string) => {
    const req = await fetch(`${urls.base}${urls.episode}/${id}`);
    return await req.json();
});

// Хранилище эпизода
export const $episode = createStore<IEpisode | null>(null);

const updateEpisode = (state: IEpisode, episode: IEpisode) => episode;

$episode.on(getEpisodeFx.doneData, updateEpisode);
