import React, { FC } from "react";

import { Episode } from "./episode";

import { IEpisode } from "../../interfaces/episode";
import "./season.sass";

interface SeasonProps {
    number: number;
    episodes: IEpisode[];
}

export const Season: FC<SeasonProps> = ({ number, episodes }) => {
    return (
        <section className="season">
            <h2 className="season__title">Season {number}</h2>
            <div className="season__table">
                <p className="season__table_info">ID</p>
                <p className="season__table_info">Episode</p>
                <p className="season__table_info">Date</p>
                <p className="season__table_info">Episode</p>
                <p className="season__table_info">Number of characters</p>
            </div>
            <div className="season__episodes">
                {episodes?.map((episode) => (
                    <Episode key={episode.id} episode={episode} />
                ))}
            </div>
        </section>
    );
};
