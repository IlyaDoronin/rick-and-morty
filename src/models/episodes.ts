import { createStore, createEffect } from "effector";
import { IEpisodes, IEpisode } from "../interfaces/episode";
import { urls } from "../urls";

// Эффект для запроса эпизодов с сервера
export const getEpisodesFx = createEffect(async () => {
    try {
        const req = await fetch(urls.base + urls.episodes);
        return req.json();
    } catch {}
});
// Хранилище эпизодов
export const $episodes = createStore<IEpisode[] | null>(null);

const updateStore = (
    state: IEpisode[] | null,
    { results }: IEpisodes
): IEpisode[] => results;

$episodes.on(getEpisodesFx.doneData, updateStore);
