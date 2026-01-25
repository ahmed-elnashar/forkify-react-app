import icons from '../../assets/img/icons.svg';

function ErrorMessage() {
    return (
        <div className="error">
            <div>
                <svg>
                    <use href={`${icons}#icon-alert-triangle`}></use>
                </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
        </div>
    );
}
export default ErrorMessage;
