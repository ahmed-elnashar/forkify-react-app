import icons from '../../../assets/img/icons.svg';
import React, { useState } from 'react';
import useRecipeSearch from '../../../hooks/useRecipeSearch.ts';
function SearchForm() {
    const [query, setQuery] = useState<string>('');
    const { search, isLoading } = useRecipeSearch();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        search(query);
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search__field"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={isLoading}
                placeholder="Search over 1,000,000 recipes..."
            />
            <button className="btn search__btn">
                <svg className="search__icon">
                    <use href={`${icons}#icon-search`}></use>
                </svg>
                <span>Search</span>
            </button>
        </form>
    );
}
export default SearchForm;
