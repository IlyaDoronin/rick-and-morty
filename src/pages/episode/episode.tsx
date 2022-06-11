import React, { FC, useEffect, useState } from "react";

import {} from "../../components";

import { IEpisode } from "../../interfaces/episode";
// import { $episode, getEpisodeFx } from "../../models/episode";
import { $episode } from "./mockEpisode";

import "./episode.sass";

export const EpisodePage: FC = () => {
    // Значение поиска
    const [value, setValue] = useState<string>("");
    // const episode = useStore<IEpisode>($episode);
    const episode = $episode;

    useEffect(() => {
        // getEpisodeFx();
    }, []);

    return <div className="page"></div>;
};
