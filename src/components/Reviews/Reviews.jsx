import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "api/moviesApi";

import ReviewsItem from "./ReviewsItem";

const Reviews = () => {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        async function getReviews(id) {
            try {
                const res = await getMovieReviews(id);
                const info = res.results.map(item => {
                    return {
                        id: item.id,
                        author: item.author,
                        text: item.content,
                    }
                })
                setReviews(info);
            } catch (error) {
                console.error(error);
            }
        }
        getReviews(movieId);
    },[movieId])
    return (
        <div>
            <h2>Reviews</h2>
            {reviews && (reviews.length > 0) ? reviews.map(item =>
                <ReviewsItem
                    key={item.id}
                    author={item.author}
                    text={item.text}
                />)
                : <p>There are no reviews yet</p>
                }
        </div>
    )
}

export default Reviews;