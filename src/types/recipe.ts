export type Recipe = {
    id: string
    image_url: string
    publisher: string
    title: string
}

export type RecipeDetail = {
    cooking_time: number
    id: string
    image_url: string
    publisher: string
    servings: number
    source_url: string
    title: string
    ingredients: RecipeIngredientsDetail[]
}

export type RecipeIngredientsDetail = {
    description: string
    quantity: number
    unit: string
}
