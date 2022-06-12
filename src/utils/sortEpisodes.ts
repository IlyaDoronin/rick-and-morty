import { IEpisode } from "../interfaces/episode";

// Соритровка эпизодов по ключу
export const sortByKey = (key: string | number, episodes: IEpisode[]) => {
    // Если ключ пустой, вовращаем оригинальный массив
    if (!key) return episodes;

    if (typeof key === "number")
        return episodes.sort((next, prev) => next[key] - prev[key]);

    return episodes.sort((next, prev) => {
        if (next[key] < prev[key]) return -1;
        if (next[key] > prev[key]) return 1;
        return 0;
    });
};
