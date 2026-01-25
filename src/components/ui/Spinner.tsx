import icons from '../../assets/img/icons.svg';
function Spinner() {
    return (
        <div className="spinner">
            <svg>
                <use href={`${icons}#icon-loader`}></use>
            </svg>
        </div>
    );
}
export default Spinner;
