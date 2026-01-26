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
        setSelectedRecipeId,
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

    const updateServings = (newServing: number) => {
        const newIngredients = selectedRecipe.ingredients.map((ingredient) => {
            return {
                ...ingredient,
                quantity:
                    (ingredient.quantity * newServing) /
                    selectedRecipe.servings,
            };
        });
        setSelectedRecipe((prev) => ({
            ...prev,
            ingredients: newIngredients,
            servings: newServing,
        }));
    };

    return {
        fetchRecipeById,
        selectedRecipe,
        updateServings,
        isLoading,
        error,
        setSelectedRecipeId,
        setSelectedRecipe,
    };
}
