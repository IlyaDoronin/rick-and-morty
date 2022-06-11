import React, { FC, ChangeEvent, KeyboardEvent } from "react";

import "./search.sass";

interface SearchProps {
    value: string;
    setValue: (string) => void;
    search: () => void;
}

export const Search: FC<SearchProps> = ({ value, setValue, search }) => {
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setValue(target.value);

    const onKeyDown = ({ code }: KeyboardEvent<HTMLInputElement>) => {
        if (code === "Enter") search();
    };

    return (
        <div className="search__block">
            <input
                type="text"
                className="search__input"
                placeholder="Search episode..."
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
};
