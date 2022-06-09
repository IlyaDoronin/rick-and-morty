import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "../../pages";
import { Header } from "../";

import "./season.sass";
import { IEpisode } from "../../interfaces/episode";

interface SeasonProps {
    number: number;
    episodes: IEpisode[];
}

export const Season: FC<SeasonProps> = ({ number, episodes }) => {
    return (
        <section>
            
        </section>
    );
};
