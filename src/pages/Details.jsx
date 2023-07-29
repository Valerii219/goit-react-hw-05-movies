import DetailsMovies from 'components/DetailsMovies/DetailsMovies'
import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div>
      <DetailsMovies/>
    </div>
  )
}

export default Details
