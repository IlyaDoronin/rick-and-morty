import React, { FC, useEffect, useState } from "react";
import { useStore } from "effector-react";

import { Episodes, Search } from "../../components";

import { IEpisode } from "../../interfaces/episode";
import { $episodes, getEpisodePagesFx } from "../../models/episodes";

import "./main.sass";

// import { $episodes } from "./mockEpisodes";
import { filterEpisodes } from "../../utils/filterEpisodes";
import { findEpisodes } from "../../utils/findEpisodes";

export const MainPage: FC = () => {
    // Значение поиска
    const [value, setValue] = useState<string>("");
    // Найденные эпизодны из поиска
    const [foundEpisodes, setFoundEpisodes] = useState<IEpisode[]>([]);
    const episodes = useStore<IEpisode[]>($episodes);
    // const episodes = $episodes;
    const seasons = filterEpisodes(episodes);

    useEffect(() => {
        getEpisodePagesFx();
    }, []);

    useEffect(() => {
        if (value) {
            const founded = findEpisodes(value, episodes);
            setFoundEpisodes(founded);
        }
    }, [value, episodes]);

    return (
        <div className="page">
            <Search value={value} setValue={setValue} />
            {value ? (
                <>
                    <Episodes episodes={foundEpisodes} />
                </>
            ) : (
                <>
                    {Object.keys(seasons)?.map((season) => (
                        <Episodes
                            key={season}
                            season={+season}
                            episodes={seasons[season]}
                        />
                    ))}
                </>
            )}
        </div>
    );
};
