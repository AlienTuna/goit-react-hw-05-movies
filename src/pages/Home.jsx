import { useEffect, useState } from "react";

import Error from "components/Error/Error";
import MovieItem from "components/MovieDetails/MovieItem";

import { getTrending } from "api/moviesApi";

const { IDLE, LOADING, RESOLVED, ERROR } = {
    IDLE: 0,
    LOADING: 1,
    RESOLVED: 2,
    ERROR: 3,
}
const Home = () => {
    const [st, setSt] = useState(IDLE)
    const [moviesList, setMoviesList] = useState(null)
    useEffect(() => {
        console.info('!!!!!!use effect!!!!!!');
        async function getTrendingList() {
            try {
                console.info('!!!!!!getTRADING REqUEST!!!!!!');
                setSt(LOADING);

                const res = await getTrending();
                setMoviesList(res);

                setSt(RESOLVED);
            } catch (error) {
                setSt(ERROR);
                console.error(error);
            }
        }
        console.info('!!!!!!getTRADING!!!!!!');
        getTrendingList();
    }, [])
    return (
        <div>
            <h2>Trending today</h2>
            {st === RESOLVED &&
                <ul>
                    {moviesList.map(item =>
                        <MovieItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                        />)}
                </ul>
            }
            {st === ERROR && <Error />}
        </div>
    )
}

export default Home;