import React, {  useEffect, useState } from 'react';
import instance from '../instance';
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
    // console.log(title)
    // console.log(fetchUrl)
    const [allmovie,setAllmovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

   const fetchData = async()=>{
        const {data}=  await instance.get(fetchUrl)
        setAllmovie(data.results) ;
          // it's not work becouse it only function definition (use function call after that it's work)
   }

   console.log(allmovie)
  useEffect(()=>{
    fetchData()
  },[]);

  return (
    <div className='row'>
     <h1 style={{color:'White'}}>{title}</h1>
     <div className='movie-row'>
      {
        allmovie?.map(item=>(
          <img className='movie' src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
        ))
      }
     </div>
    </div>
  )
}

export default Row



