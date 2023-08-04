import { Route, Routes,  } from 'react-router-dom'
import { lazy } from 'react'
import Movies from 'pages/Movies'
import Layout from 'Layout/Layout'
import Home from 'pages/Home'
import Details from 'pages/Details'
import Error from 'pages/Error'


const ReviewMovies = lazy(() => import('./ReviewMovies/ReviewMovies'));
const CreditsMovies = lazy(() => import('./CreditsMovies/CreditsMovies'));


const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route  index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<Details />}>
          <Route path="cast" element={<CreditsMovies />} />
          <Route path="review" element={<ReviewMovies />} />
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
