import { useContext, useEffect } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import { getRecipeByID } from '../services/api.ts';
export default function useRecipe(id: string) {
    const {
        selectedRecipe,
        setSelectedRecipe,
        isLoading,
        setIsLoading,
        error,
        setError,
    } = useContext(RecipeContext);

    useEffect(() => {
        const fetchRecipe = async () => {
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

        fetchRecipe();
    }, [id]);

    return {
        selectedRecipe,
        isLoading,
        error,
    };
}
