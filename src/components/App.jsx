import { Route, Routes,  } from 'react-router-dom'
import { lazy } from 'react'
import Movies from 'pages/Movies'
import Layout from 'Layout/Layout'
// import Error from 'pages/Error'
import Details from 'pages/Details'
import CreditsMovies from './CreditsMovies/CreditsMovies'
import ReviewMovies from './ReviewMovies/ReviewMovies'
const PopularMovies = lazy(() => import('./PopularMovies/PopularMovies'));



const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PopularMovies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<Details />}>
          <Route path="cast" element={<CreditsMovies />} />
          <Route path="review" element={<ReviewMovies />} />
        </Route>
      </Route>

      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
