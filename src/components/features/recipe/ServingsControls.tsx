import icons from '../../../assets/img/icons.svg';

function ServingsControls() {
    return (
        <div className="recipe__info-buttons">
            <button className="btn--tiny btn--increase-servings">
                <svg>
                    <use href={`${icons}#icon-minus-circle`}></use>
                </svg>
            </button>
            <button className="btn--tiny btn--increase-servings">
                <svg>
                    <use href={`${icons}#icon-plus-circle`}></use>
                </svg>
            </button>
        </div>
    );
}
export default ServingsControls;
