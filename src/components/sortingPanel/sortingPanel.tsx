import React, { FC, ChangeEvent } from "react";

import { IVisible } from "../../interfaces/visible";

import "./sortingPanel.sass";

interface SortingPanelProps {
    value: string;
    setValue: (string) => void;
    visible: IVisible;
    setVisible: (IVisible) => void;
}

export const SortingPanel: FC<SortingPanelProps> = ({
    value,
    setValue,
    visible,
    setVisible,
}) => {
    // Изменение значения для поиска
    const onSearch = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setValue(target.value);

    const onChangeVisibility = (key: string) =>
        setVisible((prev) => ({
            ...prev,
            [key]: { ...prev[key], state: !prev[key].state },
        }));

    return (
        <section className="sortingpanel">
            <div className="sortingpanel__item">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search episode..."
                    value={value}
                    onChange={onSearch}
                />
            </div>
            <div className="sortingpanel__item">
                {Object.keys(visible).map((key) => (
                    <div className="checkbox__item" key={key}>
                        <input
                            id={key}
                            name={key}
                            className="checkbox__input"
                            type="checkbox"
                            checked={visible[key].state}
                            onChange={() => onChangeVisibility(key)}
                        />
                        <label className="checkbox__text" htmlFor={key}>
                            {visible[key].name}
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
};
