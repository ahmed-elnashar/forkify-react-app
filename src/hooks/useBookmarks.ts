import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext.tsx';
import type { Recipe } from '../types/recipe.ts';
import useLocalStorage from './useLocalStorage.ts';
export default function useBookmarks() {
    const { bookmarks, setBookmarks } = useContext(RecipeContext);
    const { set } = useLocalStorage('bookmarks', []);

    const addToBookmarks = (recipe: Recipe) => {
        setBookmarks((prev) => {
            const newBookmarks = [...prev, recipe];
            set(newBookmarks);
            return newBookmarks;
        });
    };

    const removeFromBookmarksById = (id: string) => {
        setBookmarks((prev) => {
            const newBookmarks = prev.filter((b) => b.id !== id);
            set(newBookmarks);
            return newBookmarks;
        });
    };

    // isBookmarked is a better name
    const checkIfBookmarked = (id: string): boolean => {
        return bookmarks.filter((b) => b.id === id).length > 0;
    };

    return {
        addToBookmarks,
        removeFromBookmarksById,
        checkIfBookmarked,
        bookmarks,
    };
}
