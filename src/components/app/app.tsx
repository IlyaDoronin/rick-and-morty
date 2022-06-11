import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage, EpisodePage } from "../../pages";
import { Header } from "../";

import "./app.sass";

export const App: FC = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/:page" element={<MainPage />} />
                    <Route path="/episode/:id" element={<EpisodePage />} />
                    <Route path="/*" element={<MainPage />} />
                </Routes>
            </main>
        </>
    );
};
