import { Link } from "react-router-dom";

const MovieItem = ({ id, title }) => {
    return (
        <li>
            <Link id={id} to={`/movies/${id}`}>
                {title}
            </Link>
        </li>
    )
}
export default MovieItem;