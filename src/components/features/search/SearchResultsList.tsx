import { useContext } from 'react';
import { RecipeContext } from '../../../context/RecipeContext.tsx';
import RecipePreviewItem from '../../ui/RecipePreviewItem.tsx';
import icons from '../../../assets/img/icons.svg';

function SearchResultsList() {
    const {
        searchResults,
        isLoading,
        error,
        selectedRecipeId,
        setSelectedRecipeId,
    } = useContext(RecipeContext);

    if (isLoading) {
        return (
            <div className="spinner">
                <svg>
                    <use href={`${icons}#icon-loader`}></use>
                </svg>
            </div>
        );
    }

    if (error || searchResults.length === 0) {
        return (
            <div className="error">
                <div>
                    <svg>
                        <use href={`${icons}#icon-alert-triangle`}></use>
                    </svg>
                </div>
                <p>No recipes found for your query. Please try again!</p>
            </div>
        );
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
