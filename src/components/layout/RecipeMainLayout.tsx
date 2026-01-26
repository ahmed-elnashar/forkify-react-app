import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useRecipe from '../../hooks/useRecipe.ts';
import Spinner from '../ui/Spinner.tsx';
import ErrorMessage from '../ui/ErrorMessage.tsx';
import WelcomeMessage from '../ui/WelcomeMessage.tsx';
import RecipeDetailView from '../features/recipe/RecipeDetailView.tsx';

function RecipeMainLayout() {
    const { fetchRecipeById, selectedRecipe, error, isLoading } = useRecipe();
    const { hash } = useLocation();

    useEffect(() => {
        const fetchRecipeByUrlId = async () => {
            try {
                if (hash) {
                    const id = hash.replace('#', '');
                    await fetchRecipeById(id);
                }
            } catch (e) {
                console.log(e);
            }
        };

        fetchRecipeByUrlId();
    }, [hash]);

    return (
        <div className="recipe">
            {(!hash || hash.length < 1) && <WelcomeMessage />}

            {isLoading && <Spinner />}

            {error && <ErrorMessage />}

            {selectedRecipe && !isLoading && (
                <RecipeDetailView selectedRecipe={selectedRecipe} />
            )}
        </div>
    );
}
export default RecipeMainLayout;
