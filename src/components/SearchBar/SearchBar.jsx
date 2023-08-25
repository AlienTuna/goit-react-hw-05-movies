import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import css from './Searchbar.module.css';

import PropTypes from 'prop-types';

const SearchBar = ({onSubmit}) => {
    const [txt, setTxt] = useState('')

    const handleInputChange = e => {
        setTxt(e.currentTarget.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const text = txt.trim();
        if (!text || text === '') {
            toast.warn('Insert some text please')
            return
        }

        onSubmit(txt)
    }

    return (
        <header className={css["SearchForm-container"]}>
            <form
                onSubmit={handleSubmit}
                className={css.SearchForm}>
                <button type="submit" className={css["SearchForm-button"]}>
                    <span class="button-label">Search</span>
                    {/* <ImSearch className={css["SearchForm-button-label"]} /> */}
                </button>

                <input
                    className={css["SearchForm-input"]}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    value={txt}
                    onChange={handleInputChange}
                />
            </form>
        </header>
    )
}
export default SearchBar;

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}