import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'
import { Button } from '@mui/material';

function Banner({fetchUrl}) {
    const[movie,setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async()=>{
        const {data} = await instance.get(fetchUrl)
        //console.log(data.results[Math.floor(Math.random()*data.results.length)]) //math.random give o to 1 index value
        setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }

    console.log(movie)

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
     <div className='banner-content'>
        <h1>{movie?.name}</h1>
        <Button variant="contained" style={{backgroundColor:'red',marginRight:'20px'}}>play<i class="fa-solid fa-play"></i></Button>
        <Button variant="outlined" style={{borderColor:'white'}}>More Info</Button>
        <h2>{movie?.overview?.slice(0,200)}.....</h2> 
     </div>
    </div>
  )
}

export default Banner
