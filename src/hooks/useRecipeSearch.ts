import { useContext, useEffect } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import { searchRecipes } from '../services/api.ts';
export default function useRecipeSearch(query: string) {
    const {
        searchResults,
        setSearchResults,
        isLoading,
        setIsLoading,
        error,
        setError,
    } = useContext(RecipeContext);

    useEffect(() => {
        const fetchResults = async () => {
            setIsLoading(true);
            try {
                const results = await searchRecipes(query);
                setSearchResults(results.data.recipes);
            } catch (e: any) {
                setError('Error searching recipes ' + e?.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, [query]);

    return {
        searchResults,
        isLoading,
        error,
    };
}
