import { useState } from "react";

function SearchBar({onSearch}){
    const [query, setQuery] = useState('')

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = () => {
        onSearch(query);
    }

    return (
        <div>
            <input
            type="text"
            placeholder="搜索..."
            value={query}
            onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>搜索</button>
        </div>
    )
}

export default SearchBar