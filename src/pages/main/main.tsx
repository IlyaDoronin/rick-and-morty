import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "effector-react";

import { IEpisode } from "../../interfaces/episode";
import { $episodes, getEpisodesFx } from "../../models/episodes";

import "./main.sass";

export const MainPage: FC = () => {
    const { page } = useParams();
    const state = useStore<IEpisode[] | null>($episodes);

    useEffect(() => {
        getEpisodesFx();
    }, [page]);

    console.log(state);

    return <div>MAIN PAGE</div>;
};
