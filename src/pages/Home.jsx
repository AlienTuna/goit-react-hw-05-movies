import { useEffect, useState } from "react";

import Error from "components/Error";

const Home = () => {
    const [moviesList, setMoviesList] = useState(null)
    useEffect(() => {

    }, [])
    return (
        <div>
            <h2>Trending today</h2>

            (moviesList ? <Error />)
            (!moviesList ? <Error />)
        </div>
    )
}

export default Home;