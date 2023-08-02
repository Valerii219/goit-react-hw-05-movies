// import SearchMovies from 'components/SearchMovies/SearchMovies'

import React, { Suspense, lazy } from 'react'
const SearchMovies = lazy(() => import ('../components/SearchMovies/SearchMovies') );

const Movies = (handleSearchSubmit) => {
  return (
    <Suspense>
      <SearchMovies onSubmit={handleSearchSubmit}/>
    </Suspense>
  )
}

export default Movies
