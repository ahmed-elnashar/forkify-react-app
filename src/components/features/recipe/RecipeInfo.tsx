import type { RecipeDetail } from '../../../types/recipe.ts';
import icons from '../../../assets/img/icons.svg';
import ServingsControls from './ServingsControls.tsx';
function RecipeInfo({
    recipeDetail: { cooking_time, servings },
}: {
    recipeDetail: RecipeDetail;
}) {
    return (
        <div className="recipe__details">
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={`${icons}#icon-clock`}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--minutes">
                    {cooking_time}
                </span>
                <span className="recipe__info-text">minutes</span>
            </div>
            <div className="recipe__info">
                <svg className="recipe__info-icon">
                    <use href={`${icons}#icon-users`}></use>
                </svg>
                <span className="recipe__info-data recipe__info-data--people">
                    {servings}
                </span>
                <span className="recipe__info-text">servings</span>

                <ServingsControls />
            </div>

            <div className="recipe__user-generated">
                <svg>
                    <use href={`${icons}#icon-user`}></use>
                </svg>
            </div>
            <button className="btn--round">
                <svg className="">
                    <use href={`${icons}#icon-bookmark-fill`}></use>
                </svg>
            </button>
        </div>
    );
}
export default RecipeInfo;
