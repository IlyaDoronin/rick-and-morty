import React, { FC, useMemo, useState } from "react";

import { Episode } from "./episode";

import { IEpisode } from "../../interfaces/episode";
import { IVisible } from "../../interfaces/visible";
import { sortByKey } from "../../utils/sortEpisodes";
import "./episodes.sass";

interface EpisodesProps {
    season?: number;
    episodes: IEpisode[];
    visibleValues?: IVisible;
}

export const Episodes: FC<EpisodesProps> = ({
    season,
    episodes,
    visibleValues = {
        id: { name: "ID", state: true },
        name: { name: "Name", state: true },
        air_date: { name: "Date", state: true },
        episode: { name: "Episode", state: true },
        characters: { name: "Characters", state: true },
    },
}) => {
    // Ключ для сортировки эпизодов
    const [key, setKey] = useState<string | number>("");
    const [sortedEpisodes, setSortedEpisodes] = useState<IEpisode[]>(episodes);

    // Сортировка по значению (id, name, air_date, episodes, number of characters)
    useMemo(() => {
        setSortedEpisodes(sortByKey(key, episodes));
    }, [key, episodes]);

    return (
        <section className="episodes">
            {season && <h2 className="episodes__title">Season {season}</h2>}
            {sortedEpisodes.length ? (
                <>
                    <div className="episodes__table">
                        {visibleValues?.id.state && (
                            <p
                                className="episodes__table_info"
                                onClick={() => setKey("id")}
                            >
                                ID
                            </p>
                        )}
                        {visibleValues?.name.state && (
                            <p
                                className="episodes__table_info"
                                onClick={() => setKey("name")}
                            >
                                Name
                            </p>
                        )}
                        {visibleValues?.air_date.state && (
                            <p
                                className="episodes__table_info"
                                onClick={() => setKey("air_date")}
                            >
                                Date
                            </p>
                        )}
                        {visibleValues?.episode.state && (
                            <p
                                className="episodes__table_info"
                                onClick={() => setKey("episode")}
                            >
                                Episode
                            </p>
                        )}
                        {visibleValues?.characters.state && (
                            <p className="episodes__table_info">
                                Number of characters
                            </p>
                        )}
                    </div>
                    <div className="episodes__episodes">
                        {sortedEpisodes.map((episode) => (
                            <Episode
                                key={episode.id}
                                episode={episode}
                                visibleValues={visibleValues}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="episodes__notfound">Episodes not found!</div>
            )}
        </section>
    );
};
