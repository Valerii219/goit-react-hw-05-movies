// import SearchMovies from 'components/SearchMovies/SearchMovies'

import LoadingFallback from 'components/NotiflixJs/NotiflixJs';
import React, { Suspense, lazy } from 'react'
const SearchMovies = lazy(() => import ('../components/SearchMovies/SearchMovies') );

const Movies = (handleSearchSubmit) => {
  return (
    <Suspense fallback ={<LoadingFallback/>}>
      <SearchMovies onSubmit={handleSearchSubmit}/>
    </Suspense>
  )
}

export default Movies
