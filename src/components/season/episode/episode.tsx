import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IEpisode } from "../../../interfaces/episode";
import "./episode.sass";

interface EpisodeProps {
    episode: IEpisode;
}

export const Episode: FC<EpisodeProps> = ({
    episode: { id, name, air_date, episode, characters },
}) => {
    return (
        <Link to={`episode/${id}`} className="episode">
            <p className="episode__info">{name}</p>
            <p className="episode__info">{air_date}</p>
            <p className="episode__info">Episode - {episode}</p>
            <p className="episode__info">Characters - {characters.length}</p>
        </Link>
    );
};
