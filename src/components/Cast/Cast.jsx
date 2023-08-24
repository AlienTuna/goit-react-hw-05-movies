import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/moviesApi';

import default_poster from '../../img/default_poster.png';
import CastItem from './CastItem';

import css from './Cast.module.css';

const Cast = () => {
    const { movieId } = useParams();

    const [castInfo, setCastInfo] = useState(null);

    useEffect(() => {
        async function getCast(id) {
            try {
                const res = await getMovieCredits(id);
                const castRes = res.cast
                const info = castRes.map(item => {
                    return {
                        id: item.id,
                        img: item.profile_path ? `https://image.tmdb.org/t/p/w500${item.profile_path}` : default_poster,
                        name: item.name ? item.name : 'Unknown',
                        char: item.character ? item.character : 'Unknown',
                    }
                })
                setCastInfo(info);

                return res;
            } catch (error) {
                console.log(error);
            }

        }
        if (!movieId) {
            return;
        }
        getCast(movieId);
    }, [movieId])
    return (
        <div>
            <h2>Cast</h2>
            {castInfo && (castInfo.length > 0) ? <ul className={css.castContainer}>
                {castInfo.map(item =>
                    <CastItem
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        char={item.char}
                    />)}
            </ul>
            : <p>No cast information available</p>
            }
        </div>
    )
}

export default Cast;