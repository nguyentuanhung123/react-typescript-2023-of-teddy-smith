import React, { useState, MouseEvent, SyntheticEvent } from 'react'

type Props = {};

const Search: React.FC<Props> = (props): JSX.Element => {

    const [search, setSearch] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    }

    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}/>
            <button onClick={(e) => onClick(e)}></button>
        </div>
    )
}

export default Search
