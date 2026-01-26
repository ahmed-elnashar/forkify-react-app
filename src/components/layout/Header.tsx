import logo from '../../assets/img/logo.png';
import icons from '../../assets/img/icons.svg';
import SearchForm from '../features/search/SearchForm.tsx';
import useBookmarks from '../../hooks/useBookmarks.ts';

function Header() {
    const { bookmarks } = useBookmarks();
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="header__logo" />
            <SearchForm />

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <button className="nav__btn nav__btn--add-recipe">
                            <svg className="nav__icon">
                                <use href={`${icons}#icon-edit`}></use>
                            </svg>
                            <span>Add recipe</span>
                        </button>
                    </li>
                    <li className="nav__item">
                        <button className="nav__btn nav__btn--bookmarks">
                            <svg className="nav__icon">
                                <use href={`${icons}#icon-bookmark`}></use>
                            </svg>
                            <span>Bookmarks</span>
                        </button>
                        <div className="bookmarks">
                            <ul className="bookmarks__list">
                                {(!bookmarks || bookmarks.length === 0) && (
                                    <div className="message">
                                        <div>
                                            <svg>
                                                <use
                                                    href={`${icons}#icon-smile`}
                                                ></use>
                                            </svg>
                                        </div>
                                        <p>
                                            No bookmarks yet. Find a nice recipe
                                            and bookmark it :)
                                        </p>
                                    </div>
                                )}
                                {bookmarks &&
                                    bookmarks.map((bookmark) => (
                                        <li
                                            className="preview"
                                            key={bookmark.id}
                                        >
                                            <a
                                                className="preview__link"
                                                href={`#${bookmark.id}`}
                                            >
                                                <figure className="preview__fig">
                                                    <img
                                                        src={bookmark.image_url}
                                                        alt={bookmark.title}
                                                    />
                                                </figure>
                                                <div className="preview__data">
                                                    <h4 className="preview__name">
                                                        {bookmark.title}
                                                    </h4>
                                                    <p className="preview__publisher">
                                                        {bookmark.publisher}
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
