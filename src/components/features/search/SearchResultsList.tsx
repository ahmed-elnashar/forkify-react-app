import { useContext } from 'react';
import { RecipeContext } from '../../../context/RecipeContext.tsx';
import RecipePreviewItem from '../../ui/RecipePreviewItem.tsx';
import Spinner from '../../ui/Spinner.tsx';
import ErrorMessage from '../../ui/ErrorMessage.tsx';
import usePagination from '../../../hooks/usePagination.ts';

function SearchResultsList() {
    const { isLoading, error, selectedRecipeId, setSelectedRecipeId } =
        useContext(RecipeContext);

    const { paginatedResults } = usePagination();

    if (isLoading) {
        return <Spinner />;
    }

    if (error || (paginatedResults.length === 0 && !selectedRecipeId)) {
        return <ErrorMessage />;
    }
    return (
        <ul className="results">
            {paginatedResults.map((item) => (
                <RecipePreviewItem
                    item={item}
                    key={item.id}
                    selectedRecipeId={selectedRecipeId}
                    setSelectedRecipeId={setSelectedRecipeId}
                />
            ))}
        </ul>
    );
}
export default SearchResultsList;
