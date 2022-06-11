import React, { FC, ChangeEvent } from "react";

import "./search.sass";

interface SearchProps {
    value: string;
    setValue: (string) => void;
}

export const Search: FC<SearchProps> = ({ value, setValue }) => {
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setValue(target.value);

    return (
        <div className="search__block">
            <input
                type="text"
                className="search__input"
                placeholder="Search episode..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
