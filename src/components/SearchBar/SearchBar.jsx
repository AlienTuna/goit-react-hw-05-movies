// import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';

import { useState } from 'react';
import css from './SearchBar.module.css';

// import PropTypes from 'prop-types';

const SearchBar = ({ txt, onSearch }) => {
    const [inputTxt, setInputTxt] = useState(txt);

    function handleSubmit(e) {
        e.preventDefault();

        // const txt = e.target[0].value.trim();
        if(inputTxt && inputTxt !== '') {
            onSearch(inputTxt);
        }
    }

    function handleInput(e) {
        setInputTxt(e.currentTarget.value);
        // console.log(e.currentTarget.value)
    }

    return (
        <header className={css["SearchForm-container"]}>
            <form
                name='searchQuery'
                className={css.SearchForm}
                onSubmit={handleSubmit}>

                <input
                    className={css["SearchForm-input"]}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={inputTxt}
                    onInput={handleInput}
                />
                
                <button type="submit" className={css["SearchForm-button"]}>
                    <span className={css["SearchForm-button-label"]}>Search</span>
                    {/* <ImSearch className={css["SearchForm-button-label"]} /> */}
                </button>
            </form>
        </header>
    )
}
export default SearchBar;

// SearchBar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }