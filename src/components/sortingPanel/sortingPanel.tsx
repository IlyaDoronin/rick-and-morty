import React, { FC, ChangeEvent } from "react";

import "./sortingPanel.sass";

interface SortingPanelProps {
    value: string;
    setValue: (string) => void;
    visible: object;
    setVisible: (object) => void;
}

export const SortingPanel: FC<SortingPanelProps> = ({
    value,
    setValue,
    visible,
    setVisible,
}) => {
    // Изменение значения для поиска
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setValue(target.value);

    return (
        <section className="sortingpanel">
            <div>
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search episode..."
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div>
                
            </div>
        </section>
    );
};
