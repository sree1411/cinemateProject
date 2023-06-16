import React from 'react';
import { Route,Routes } from 'react-router-dom';
import MovieDetail from '../Pages/MovieDetail';
import MovieList from '../Pages/MovieList';
import Search from '../Pages/Search';
import PageNotFound from '../Pages/PageNotFound';

const AllRoutes = () => {
  return (
    <>
    <div className='bg-black'> 
    <Routes>
        <Route path="/" element={<MovieList  apiPath="movie/now_playing"/>}/>
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        <Route path="movie/popular" element={<MovieList apiPath="movie/popular"/>}/>
        <Route path="movie/top" element={<MovieList apiPath="movie/top_rated"/>}/>
        <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>

    </Routes>
    </div>
    </>
  )
}

export default AllRoutes
