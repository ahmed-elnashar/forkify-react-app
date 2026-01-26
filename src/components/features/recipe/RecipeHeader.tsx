import type { RecipeDetail } from '../../../types/recipe.ts';
function RecipeHeader({
    recipeDetail: { title, image_url },
}: {
    recipeDetail: RecipeDetail;
}) {
    return (
        <figure className="recipe__fig">
            <img src={image_url} alt={title} className="recipe__img" />
            <h1 className="recipe__title">
                <span>{title}</span>
            </h1>
        </figure>
    );
}
export default RecipeHeader;
