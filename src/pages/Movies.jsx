import { Link } from "react-router-dom";

const Movies = () => {
    const moviesList = [{id:1, nam:'mov1'}, {id:2, nam:'mov2'}, {id:3, nam:'mov3'}]
    return (
        <div>
            <h2>Movies page</h2>
            {moviesList.map(movie => <Link key={movie.id} to={`${movie.id}`}>movie - {movie.nam}</Link>)}
        </div>
    )
}

export default Movies;