import type { Recipe } from '../../types/recipe.ts';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function RecipePreviewItem({
    item,
    selectedRecipeId,
    setSelectedRecipeId,
}: {
    item: Recipe;
    selectedRecipeId: string;
    setSelectedRecipeId: React.Dispatch<React.SetStateAction<string>>;
}) {
    const { id, title, publisher, image_url } = item;
    const navigate = useNavigate();

    function handleSelectRecipe(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        selectedItem: Recipe
    ) {
        e.preventDefault();
        setSelectedRecipeId(selectedItem.id);
        navigate(`#${selectedItem.id}`);
    }

    return (
        <li className="preview">
            <a
                className={`preview__link ${selectedRecipeId === id ? 'preview__link--active' : ''}`}
                onClick={(e) => handleSelectRecipe(e, item)}
                href=""
            >
                <figure className="preview__fig">
                    <img src={`${image_url}`} alt="Test" />
                </figure>
                <div className="preview__data">
                    <h4 className="preview__title">{title}</h4>
                    <p className="preview__publisher">{publisher}</p>
                    <div className="preview__user-generated">
                        <svg>
                            <use href="src/img/icons.svg#icon-user"></use>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
    );
}
export default RecipePreviewItem;
