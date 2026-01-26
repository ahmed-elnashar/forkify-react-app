import type { RecipeDetail } from '../../../types/recipe.ts';
import IngredientItem from './IngredientItem.tsx';

function IngredientList({
    recipeDetail: { ingredients, id },
}: {
    recipeDetail: RecipeDetail;
}) {
    return (
        <div className="recipe__ingredients">
            <h2 className="heading--2">Recipe ingredients</h2>
            <ul className="recipe__ingredient-list">
                {ingredients &&
                    ingredients.map((ingredient, idx) => (
                        <IngredientItem
                            ingredient={ingredient}
                            key={`${id}-${idx}`}
                        />
                    ))}
            </ul>
        </div>
    );
}
export default IngredientList;
