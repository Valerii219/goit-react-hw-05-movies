
import LoadingFallback from 'components/NotiflixJs/NotiflixJs';
import React, { Suspense, lazy } from 'react'
const PopularMovies = lazy(() => import('components/PopularMovies/PopularMovies'));

const Home = () => {
  return (
    <Suspense fallback ={<LoadingFallback/>}>
      <PopularMovies/>
    </Suspense>
  )
}

export default Home
