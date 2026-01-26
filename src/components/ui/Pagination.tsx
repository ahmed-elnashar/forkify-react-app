import icons from '../../assets/img/icons.svg';
import usePagination from '../../hooks/usePagination.ts';
function Pagination() {
    const {
        hasPrevPage,
        hasNextPage,
        goToPrevPage,
        goToNextPage,
        currentPage,
        totalPages,
    } = usePagination();
    return (
        <>
            <button
                className="btn--inline pagination__btn--prev"
                onClick={goToPrevPage}
                disabled={!hasPrevPage}
            >
                <svg className="search__icon">
                    <use href={`${icons}#icon-arrow-left`}></use>
                </svg>
                <span>Prev</span>
            </button>
            <p>
                Page {currentPage + 1} of {totalPages}
            </p>
            <button
                className="btn--inline pagination__btn--next"
                disabled={!hasNextPage}
                onClick={goToNextPage}
            >
                <span>Next</span>
                <svg className="search__icon">
                    <use href={`${icons}#icon-arrow-right`}></use>
                </svg>
            </button>
        </>
    );
}
export default Pagination;
