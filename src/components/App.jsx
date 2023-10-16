import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./Layout";
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import('pages/Home'));
const MoviesPage = lazy(() => import("pages/Movies"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetails"));

export const App = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </main>
  );
};
