import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import { RESULTS_PER_PAGE } from '../config/constants.ts';
export default function usePagination() {
    const { searchResults, currentPage, setCurrentPage } =
        useContext(RecipeContext);

    const startIndex = currentPage * RESULTS_PER_PAGE;
    const endIndex = startIndex + RESULTS_PER_PAGE;
    const paginatedResults = searchResults.slice(startIndex, endIndex);
    const totalPages = Math.ceil(searchResults.length / RESULTS_PER_PAGE);
    const hasNextPage = currentPage < totalPages - 1;
    const hasPrevPage = currentPage > 0;

    const goToNextPage = () => {
        setCurrentPage((prev) => (prev += 1));
    };
    const goToPrevPage = () => {
        setCurrentPage((prev) => (prev -= 1));
    };

    return {
        paginatedResults,
        totalPages,
        hasNextPage,
        hasPrevPage,
        goToNextPage,
        goToPrevPage,
        currentPage,
    };
}
