import React, { FC, useEffect } from "react";
import { useStore } from "effector-react";

import { Season } from "../../components";

import { IEpisode } from "../../interfaces/episode";
// import { $episodes, getEpisodePagesFx } from "../../models/episodes";

import "./main.sass";

import { $episodes } from "./mockEpisodes";
import { filterEpisodes } from "../../utils/filterEpisodes";

export const MainPage: FC = () => {
    // const episodes = useStore<IEpisode[]>($episodes);
    const episodes = $episodes;
    const seasons = filterEpisodes(episodes);

    useEffect(() => {
        // getEpisodePagesFx();
    }, []);

    return (
        <div className="page">
            <div></div>
            {Object.keys(seasons)?.map((season) => (
                <Season
                    key={season}
                    number={+season}
                    episodes={seasons[season]}
                ></Season>
            ))}
        </div>
    );
};
