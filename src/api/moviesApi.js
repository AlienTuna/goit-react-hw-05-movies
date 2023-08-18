import axios from "axios";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjY4ZGJmYjRmOWU1MTM0NjE4ZjNiNTBiMGE3NmRhNSIsInN1YiI6IjY0ZGUzNTE3NTllOGE5MDBmZmZmM2ExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ypRdgaB45rTOdh74F8u98pQZflFHKQ7CUlZDaJnUInk';
const baseURL = 'https://api.themoviedb.org/3/';

const api = axios.create({
    baseURL,
    params: {
        // api_key,
        language: 'en-US',
    },
    headers: { Authorization: `Bearer ${API_KEY}` },
})

export async function getTrending() {
    const res = await api.get(`trending/movie/day`);
    return res.data;
}

export async function getSearch(query) {
    const res = await api.get(`search/movie`, {params: {query}});
    return res.data;
}

export async function getDetails(id) {
    const res = await api.get(`movie/${id}`);
    return res.data;
}

export async function getCast(id) {
    const res = await axios.get(`${URL}movie/${id}/credits?api_key=${KEY}`);
    return res.data;
}
export async function getReviews(id) {
    const res = await axios.get(`${URL}movie/${id}/reviews?api_key=${KEY}`);
    return res.data;
}
