import { createContext, type ReactNode, useState } from 'react';
import type { Recipe, RecipeDetail } from '../types/recipe.ts';
import React from 'react';

interface RecipeContextInterface {
    searchResults: Recipe[];
    setSearchResults: React.Dispatch<React.SetStateAction<Recipe[]>>;
    selectedRecipe: RecipeDetail;
    setSelectedRecipe: React.Dispatch<React.SetStateAction<RecipeDetail>>;
    bookmarks: Recipe[];
    setBookmarks: React.Dispatch<React.SetStateAction<Recipe[]>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    servings: number;
    setServings: React.Dispatch<React.SetStateAction<number>>;
}

export const RecipeContext = createContext<RecipeContextInterface>({
    searchResults: [],
    setSearchResults: () => {},
    selectedRecipe: {} as any,
    setSelectedRecipe: () => {},
    bookmarks: [],
    setBookmarks: () => {},
    isLoading: false,
    setIsLoading: () => {},
    error: '',
    setError: () => {},
    servings: 4,
    setServings: () => {},
});

const RecipeContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetail>(
        {} as any
    );
    const [bookmarks, setBookmarks] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [servings, setServings] = useState<number>(4);

    return (
        <RecipeContext
            value={{
                searchResults,
                setSearchResults,
                selectedRecipe,
                setSelectedRecipe,
                bookmarks,
                setBookmarks,
                isLoading,
                setIsLoading,
                error,
                setError,
                servings,
                setServings,
            }}
        >
            {children}
        </RecipeContext>
    );
};

export default RecipeContextProvider;
