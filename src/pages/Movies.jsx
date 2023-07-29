import SearchMovies from 'components/SearchMovies/SearchMovies'
import React from 'react'

const Movies = (handleSearchSubmit) => {
  return (
    <div>
      <SearchMovies onSubmit={handleSearchSubmit}/>
    </div>
  )
}

export default Movies
