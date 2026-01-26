import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import { searchRecipes } from '../services/api.ts';
export default function useRecipeSearch() {
    const {
        searchResults,
        setSearchResults,
        isLoading,
        setIsLoading,
        error,
        setError,
        setCurrentPage,
    } = useContext(RecipeContext);

    const search = async (query: string) => {
        setIsLoading(true);
        try {
            const results = await searchRecipes(query);
            setSearchResults(results.data.recipes);
            setCurrentPage(0);
        } catch (e: any) {
            setError('Error searching recipes ' + e?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        search,
        searchResults,
        isLoading,
        error,
    };
}
