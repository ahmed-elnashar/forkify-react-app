import icons from '../../../assets/img/icons.svg';
import type { RecipeIngredientsDetail } from '../../../types/recipe.ts';

function IngredientItem({
    ingredient,
}: {
    ingredient: RecipeIngredientsDetail;
}) {
    return (
        <li className="recipe__ingredient">
            <svg className="recipe__icon">
                <use href={`${icons}#icon-check`}></use>
            </svg>
            <div className="recipe__quantity">{ingredient.quantity}</div>
            <div className="recipe__description">
                <span className="recipe__unit">{ingredient.unit}</span>
                {ingredient.description}
            </div>
        </li>
    );
}
export default IngredientItem;
