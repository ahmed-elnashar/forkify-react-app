import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import type { Recipe } from '../types/recipe.ts';
export default function useBookmarks() {
    const { bookmarks, setBookmarks } = useContext(RecipeContext);

    const addToBookmarks = (recipe: Recipe) => {
        setBookmarks((prev) => [...prev, recipe]);
    };

    const removeFromBookmarksById = (id: string) => {
        setBookmarks((prev) => prev.filter((b) => b.id !== id));
    };

    return {
        addToBookmarks,
        removeFromBookmarksById,
        bookmarks,
    };
}
