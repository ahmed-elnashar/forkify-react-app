import icons from '../../../assets/img/icons.svg';
import useRecipe from '../../../hooks/useRecipe.ts';
import { useState } from 'react';

function ServingsControls() {
    const { selectedRecipe, updateServings } = useRecipe();
    const [servings, setServings] = useState(selectedRecipe.servings);

    const handleIncreaseServings = () => {
        setServings((prev) => {
            const newServing = (prev += 1);
            updateServings(newServing);
            return newServing;
        });
    };
    const handleDecreaseServings = () => {
        if (servings > 1) {
            setServings((prev) => {
                const newServing = (prev -= 1);
                updateServings(newServing);
                return newServing;
            });
        }
    };

    return (
        <div className="recipe__info-buttons">
            <button
                className="btn--tiny btn-decrease-servings"
                onClick={handleDecreaseServings}
            >
                <svg>
                    <use href={`${icons}#icon-minus-circle`}></use>
                </svg>
            </button>
            <button
                className="btn--tiny btn--increase-servings"
                onClick={handleIncreaseServings}
            >
                <svg>
                    <use href={`${icons}#icon-plus-circle`}></use>
                </svg>
            </button>
        </div>
    );
}
export default ServingsControls;
