import { useEffect } from 'react';
import { getMovieCredits } from 'src/api/moviesApi.js';

const Cast = ({ id }) => {
    useEffect(id => {
        async function getCast(id) {
        try {
            const res = await getMovieCredits(id);
            console.log(res);
            return res;
        } catch(error) {
            console.log(error);
        }

    }
       getCast(id) 
    })
return (
    <div>Cast - {id}</div>
)
}