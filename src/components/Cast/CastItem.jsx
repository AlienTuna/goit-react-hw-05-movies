import css from './Cast.module.css';

const CastItem = ({ img, name, char }) => {

    return (
        <li className={css.castCard}>
            <div className={css.imgContainer}>
                <img src={img} alt={name} width="200px" className={css.img} />
            </div>
            <div className={css.infoContainer}>
                <p className={css.name}>{name}</p>
                <p>Character - {char}</p>
            </div>
        </li>
    )
}

export default CastItem;