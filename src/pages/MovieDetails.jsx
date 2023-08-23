import { useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    useEffect(() => {
        // request getMovie(id)
    })
    return (
        <div>
            <h2>Details</h2>
            Movie id = {movieId}
            <ul>
                <li>
                    <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
                </li>
                <li>
                    <NavLink>Feedback</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default MovieDetails;