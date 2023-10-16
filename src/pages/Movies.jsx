import { Link, useSearchParams } from "react-router-dom";
import { getSearch } from "api/moviesApi";

import SearchBar from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('searchQuery')
//
    function inputParams(query) {
        if (query) {
            setSearchParams({ searchQuery: query });
        }
    }

    const [searchedMovies, setSearchedMovies] = useState(null);

    useEffect(() => {
        async function getSearchMovies(q) {
            try {
                console.info('!!!!!!REQUEST!!!!!!')
                const res = await getSearch(q);
                const info = res.results.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        img: item.poster_path,
                        year: item.release_date.slice(0, 4),
                    }
                })

                setSearchedMovies(info);
            } catch (error) {
                console.error(error);
            }
        }

        getSearchMovies(query);
    }, [query])
    return (
        <div>
            <SearchBar
                txt={query}
                onSearch={inputParams}
            />
            {searchedMovies &&
                <ul>
                    {searchedMovies.map(movie =>
                        <li>
                            <Link
                                key={movie.id}
                                to={`${movie.id}`}
                            >
                                {movie.title}
                            </Link>
                        </li>
                    )
                    }
                </ul>}
        </div>
    )
}

export default Movies;