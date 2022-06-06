import React from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "../../pages";

import "./app.sass";

export const App = () => {
    return (
        <main className="container">
            <Routes>
                <Route path="/*" element={<MainPage />} />
            </Routes>
        </main>
    );
};
