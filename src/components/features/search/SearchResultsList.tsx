import { useContext } from 'react';
import { RecipeContext } from '../../../context/RecipeContext.tsx';
import RecipePreviewItem from '../../ui/RecipePreviewItem.tsx';
import Spinner from '../../ui/Spinner.tsx';
import ErrorMessage from '../../ui/ErrorMessage.tsx';

function SearchResultsList() {
    const {
        searchResults,
        isLoading,
        error,
        selectedRecipeId,
        setSelectedRecipeId,
    } = useContext(RecipeContext);

    if (isLoading) {
        return <Spinner />;
    }

    if (error || searchResults.length === 0) {
        return <ErrorMessage />;
    }
    return (
        <ul className="results">
            {searchResults.map((item) => (
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
