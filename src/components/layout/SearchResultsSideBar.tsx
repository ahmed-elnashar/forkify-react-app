import SearchResultsList from '../features/search/SearchResultsList.tsx';
import Pagination from '../ui/Pagination.tsx';
function SearchResultsSideBar() {
    return (
        <div className="search-results">
            <SearchResultsList />

            <div className="pagination">
                <Pagination />
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
