import React, { FC, useEffect } from "react";
import { useStore } from "effector-react";

import { IEpisode } from "../../interfaces/episode";
import { $episodes, getEpisodePagesFx } from "../../models/episodes";

import "./main.sass";

export const MainPage: FC = () => {
    const episodes = useStore<IEpisode[]>($episodes);

    useEffect(() => {
        getEpisodePagesFx();
    }, []);

    console.log(episodes);

    return (
        <div>
            {/* {episodes?.map(({ id, name, air_date, episode, url }) => (
                <div key={id}></div>
            ))} */}
        </div>
    );
};
