import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const MovieList = ({apiPath}) => {

   const {data:movies}= useFetch(apiPath)

  return (
     <main>
       <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
        {
          movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))
        }
    
  
        </div>

       </section>
     </main>
  )
}

export default MovieList
