import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IEpisode } from "../../../interfaces/episode";
import { IVisible } from "../../../interfaces/visible";
import "./episode.sass";

interface EpisodeProps {
    episode: IEpisode;
    visibleValues?: IVisible;
}

export const Episode: FC<EpisodeProps> = ({
    episode: { id, name, air_date, episode, characters },
    visibleValues = {
        id: { name: "ID", state: true },
        name: { name: "Name", state: true },
        air_date: { name: "Date", state: true },
        episode: { name: "Episode", state: true },
        characters: { name: "Characters", state: true },
    },
}) => {
    return (
        <Link to={`/episode/${id}`} className="episode">
            {visibleValues?.id.state && <p className="episode__info">{id}</p>}
            {visibleValues?.name.state && (
                <p className="episode__info">{name}</p>
            )}
            {visibleValues?.air_date.state && (
                <p className="episode__info">{air_date}</p>
            )}
            {visibleValues?.episode.state && (
                <p className="episode__info">{episode}</p>
            )}
            {visibleValues?.characters.state && (
                <p className="episode__info">{characters?.length}</p>
            )}
        </Link>
    );
};
