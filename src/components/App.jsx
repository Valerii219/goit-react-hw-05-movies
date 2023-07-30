
import { Route, Routes } from 'react-router-dom'
import Movies from 'pages/Movies'
import Layout from 'Layout/Layout'
import Error from 'pages/Error'
import Details from 'pages/Details'
import PopularMovies from './PopularMovies/PopularMovies'
import CreditsMovies from './CreditsMovies/CreditsMovies'



const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PopularMovies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<Details />}>
          <Route path="cast" element={<CreditsMovies />} />
        </Route>
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
