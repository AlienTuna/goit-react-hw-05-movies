import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";
import css from './MovieInfo.module.css';

// import default_poster from 'src\img\default_poster.png';
const MovieInfo = ({ data }) => {
    const { img, title, year, score, overview, genres } = data;
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? "/")
    return (
        <div>
            <div className={css['linkBack']}><Link to={backLink.current}>🠐 Go back</Link></div>
            <div className={css['movieCard']}>
                <img src={img} alt={title} height="500" />
                <div>
                    <h2>{title}<span> ({year})</span></h2>
                    <div>User score: {score}</div>
                    <h3>Overview</h3>
                    <span>{overview}</span>
                    <h3>Genres</h3>
                    <span>{genres}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;