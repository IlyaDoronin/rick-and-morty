import { IEpisode } from "../interfaces/episode";

export const filterEpisodes = (episodes: IEpisode[]) =>
    episodes.reduce((acc, item: IEpisode) => {
        // Коррентный номер сезона
        const seasonNumber = item?.episode
            ?.match(/(?<=S)[^E]+/)[0]
            .replaceAll("0", "");
        // Если в итоговом объекте нету ключа с нужным сезоном, создаем его
        if (!acc.hasOwnProperty(seasonNumber)) acc[seasonNumber] = [];

        // Добавление нового эпизода в итоговый объект
        return { ...acc, [seasonNumber]: [...acc[seasonNumber], item] };
    }, {});
