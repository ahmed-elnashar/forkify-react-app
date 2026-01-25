import SearchResultsList from '../features/search/SearchResultsList.tsx';
function SearchResultsSideBar() {
    return (
        <div className="search-results">
            <SearchResultsList />

            <div className="pagination">
                {/*<!-- <button className="btn--inline pagination__btn--prev">*/}
                {/*  <svg className="search__icon">*/}
                {/*    <use href="src/img/icons.svg#icon-arrow-left"></use>*/}
                {/*  </svg>*/}
                {/*  <span>Page 1</span>*/}
                {/*</button>*/}
                {/*<button className="btn--inline pagination__btn--next">*/}
                {/*  <span>Page 3</span>*/}
                {/*  <svg className="search__icon">*/}
                {/*    <use href="src/img/icons.svg#icon-arrow-right"></use>*/}
                {/*  </svg>*/}
                {/*</button> -->*/}
            </div>

            <p className="copyright">
                &copy; Copyright by
                <a
                    className="twitter-link"
                    target="_blank"
                    href="https://twitter.com/jonasschmedtman"
                >
                    Jonas Schmedtmann
                </a>
                . Use for learning or your portfolio. Don't use to teach. Don't
                claim as your own.
            </p>
        </div>
    );
}
export default SearchResultsSideBar;
