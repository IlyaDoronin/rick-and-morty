import React, { FC, useEffect, useState } from "react";
import { useStore } from "effector-react";

import { Episodes, SortingPanel } from "../../components";

import { IEpisode } from "../../interfaces/episode";
import { IVisible } from "../../interfaces/visible";

import { $episodes, getEpisodePagesFx } from "../../models/episodes";

import "./main.sass";

// import { $episodes } from "./mockEpisodes";
import { filterEpisodes } from "../../utils/filterEpisodes";
import { findEpisodes } from "../../utils/findEpisodes";

export const MainPage: FC = () => {
    // Значение поиска
    const [value, setValue] = useState<string>("");
    // Отображаемык колонки
    const [visibleValues, setVisibleValues] = useState<IVisible>({
        id: { name: "ID", state: true },
        name: { name: "Name", state: true },
        air_date: { name: "Date", state: true },
        episode: { name: "Episode", state: true },
        characters: { name: "Characters", state: true },
    });
    // Найденные эпизодны из поиска
    const [foundEpisodes, setFoundEpisodes] = useState<IEpisode[]>([]);
    const episodes = useStore<IEpisode[]>($episodes);
    // const episodes = $episodes;
    const seasons = filterEpisodes(episodes);

    useEffect(() => {
        getEpisodePagesFx();
    }, []);

    useEffect(() => {
        if (value) {
            const founded = findEpisodes(value, episodes);
            setFoundEpisodes(founded);
        }
    }, [value, episodes]);

    return (
        <div className="page">
            <SortingPanel
                value={value}
                setValue={setValue}
                visible={visibleValues}
                setVisible={setVisibleValues}
            />
            {value ? (
                <>
                    <Episodes
                        episodes={foundEpisodes}
                        visibleValues={visibleValues}
                    />
                </>
            ) : (
                <>
                    {Object.keys(seasons)?.map((season) => (
                        <Episodes
                            key={season}
                            season={+season}
                            episodes={seasons[season]}
                            visibleValues={visibleValues}
                        />
                    ))}
                </>
            )}
        </div>
    );
};
