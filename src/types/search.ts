import type { Recipe, RecipeDetail } from './recipe.ts'

export type SearchRecipesResponse = {
    status: 'success' | 'error'
    results: number
    data: {
        recipes: Recipe[]
    }
}

export type GetRecipeDetailResponse = {
    status: 'success' | 'error'
    data: {
        recipe: RecipeDetail
    }
}
