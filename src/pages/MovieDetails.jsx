import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { getMovie } from "api/moviesApi";
import default_poster from '../img/default_poster.png';

import MovieInfo from "components/MovieDetails/MovieInfo";

const MovieDetails = () => {
    const { movieId } = useParams();

    const [details, setDetails] = useState(null)

    useEffect(() => {
        async function getMovieDetails(id) {
            try {
                const res = await getMovie(movieId);
                const info = {
                    img: res.poster_path ? `https://image.tmdb.org/t/p/w500${res.poster_path}` : default_poster,
                    title: res.title,
                    year: res.release_date.slice(0, 4),
                    overview: res.overview !== '' ? res.overview : 'There is no overview',
                    genres: res.genres.length > 0 ? res.genres?.map(genre => genre.name).join(', ') : 'No genres',
                    score: res.vote_average,
                };

                setDetails(info)
                return res;
            } catch (error) {
                console.error(error);
            }
        }
        getMovieDetails(movieId)
    }, [movieId])
    return (
        <div>
            <h2>Details</h2>
            {details &&
                <MovieInfo data={details} />
            }
            <hr/>
            <ul>
                <li>
                    <NavLink to={`cast`}>Cast</NavLink>
                </li>
                <li>
                    <NavLink to={`reviews`}>Reviews</NavLink>
                </li>
            </ul>
            <hr/>
            <Outlet />
        </div>
    )
}

export default MovieDetails;