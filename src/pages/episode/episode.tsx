import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "effector-react";

import { Episodes } from "../../components";

import { IEpisode, ICharacter } from "../../interfaces/episode";
// import { $episode, getEpisodeFx } from "../../models/episode";
// import { $characters, getCharactersFx } from "../../models/characters";
import { $episode } from "./mockEpisode";
import { $characters } from "./mockCharacters";

import "./episode.sass";

export const EpisodePage: FC = () => {
    const { id } = useParams();

    const episode = ($episode);
    const characters = ($characters);

    // const episode: IEpisode = $episode;
    // const characters: ICharacter = $characters;

    // useEffect(() => {
    //     getEpisodeFx(id);
    // }, [id]);

    // useEffect(() => {
    //     if (episode) getCharactersFx(episode.characters);
    // }, [episode]);

    return (
        <div className="page">
            <>
                {episode && <Episodes episodes={[episode]} />}
                {characters.map((character) => (
                    <div key={character.id}>{character.id}</div>
                ))}
            </>
        </div>
    );
};
