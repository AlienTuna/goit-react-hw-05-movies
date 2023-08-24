import css from './Reviews.module.css';

const ReviewsItem = ({author, text}) => {
    return (
        <li className={css.reviewContainer}>
            <h3>Author: {author}</h3>
            <p className={css.reviewTxt}>{text}</p>
        </li>
    )
}

export default ReviewsItem;