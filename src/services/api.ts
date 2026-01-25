import { env } from '../config/env';
import type {
    GetRecipeDetailResponse,
    SearchRecipesResponse,
} from '../types/search.ts';

export async function searchRecipes(
    query: string
): Promise<SearchRecipesResponse> {
    try {
        const url = `${env.recipesApiUrl}?search=${query}&key=${env.apiKey}`;
        const response = await fetch(url, { method: 'GET' });
        return (await response.json()) as SearchRecipesResponse;
    } catch (e) {
        console.log('Error searching recipes: ', e);
        throw e;
    }
}

export async function getRecipeByID(
    id: string
): Promise<GetRecipeDetailResponse> {
    try {
        const url = `${env.recipesApiUrl}/${id}?key=${env.apiKey}`;
        const response = await fetch(url, { method: 'GET' });
        return (await response.json()) as GetRecipeDetailResponse;
    } catch (e) {
        console.log('Error getting a recipe details by id: ', e);
        throw e;
    }
}
