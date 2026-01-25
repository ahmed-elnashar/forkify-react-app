import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import { getRecipeByID } from '../services/api.ts';
export default function useRecipe() {
    const {
        selectedRecipe,
        setSelectedRecipe,
        isLoading,
        setIsLoading,
        error,
        setError,
    } = useContext(RecipeContext);

    const fetchRecipeById = async (id: string) => {
        setIsLoading(true);
        try {
            const recipe = await getRecipeByID(id);
            setSelectedRecipe(recipe.data.recipe);
        } catch (e: any) {
            setError('Error searching recipes ' + e?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        fetchRecipeById,
        selectedRecipe,
        isLoading,
        error,
    };
}
