import type { RecipeDetail } from '../../../types/recipe.ts';
import RecipeHeader from './RecipeHeader.tsx';
import RecipeInfo from './RecipeInfo.tsx';
import IngredientList from './IngredientList.tsx';
import RecipeDirections from './RecipeDirections.tsx';

function RecipeDetailView({
    selectedRecipe,
}: {
    selectedRecipe: RecipeDetail;
}) {
    return (
        <>
            <RecipeHeader recipeDetail={selectedRecipe} />
            <RecipeInfo recipeDetail={selectedRecipe} />
            <IngredientList recipeDetail={selectedRecipe} />
            <RecipeDirections recipeDetail={selectedRecipe} />
        </>
    );
}
export default RecipeDetailView;
