import { createStore, createEffect, forward } from "effector";
import { IEpisodes, IEpisode } from "../interfaces/episode";
import { urls } from "../urls";

// Запрос всех эпизодов с сервера
const getEpisodesFx = createEffect(async ({ info }: IEpisodes) => {
    let episodes = [];

    // Зварос эпизодов с каждой страницы
    for (let i = 1; i <= info!.pages; i++) {
        const req = await fetch(`${urls.base}${urls.episodes}?page=${i}`);

        const { results } = await req.json();

        episodes.push(...results);
    }

    return episodes;
});

// Получение колличества страниц с эпизодами
export const getEpisodePagesFx = createEffect(async () => {
    try {
        const req = await fetch(urls.base + urls.episodes);
        return req.json();
    } catch {}
});

forward({
    from: getEpisodePagesFx.doneData,
    to: getEpisodesFx,
});

// Хранилище эпизодов
export const $episodes = createStore<IEpisode[]>([]);

const updateEpisodes = (state: IEpisode[], { result }: IEpisodes) => result;

$episodes.on(getEpisodesFx.done, updateEpisodes);
