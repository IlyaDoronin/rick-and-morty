import React, { FC } from "react";

import { Episode } from "./episode";

import { IEpisode } from "../../interfaces/episode";
import "./episodes.sass";

interface EpisodesProps {
    season?: number;
    episodes: IEpisode[];
}

export const Episodes: FC<EpisodesProps> = ({ season, episodes }) => {
    return (
        <section className="episodes">
            {season && <h2 className="episodes__title">Season {season}</h2>}
            {episodes.length ? (
                <>
                    <div className="episodes__table">
                        <p className="episodes__table_info">ID</p>
                        <p className="episodes__table_info">Episode</p>
                        <p className="episodes__table_info">Date</p>
                        <p className="episodes__table_info">Episode</p>
                        <p className="episodes__table_info">
                            Number of characters
                        </p>
                    </div>
                    <div className="episodes__episodes">
                        {episodes?.map((episode) => (
                            <Episode key={episode.id} episode={episode} />
                        ))}
                    </div>
                </>
            ) : (
                <div className="episodes__notfound">Episodes not found!</div>
            )}
        </section>
    );
};
