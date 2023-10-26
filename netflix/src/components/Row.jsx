import React, {  useState } from 'react'
import instance from '../instance'

function Row({title,fetchUrl}) {
    // console.log(title)
    // console.log(fetchUrl)
   
   const fetchData = async()=>{
        const responce=  await instance.get(fetchUrl)
          // console.log(responce)  it's not work becouse it only function definition (use function call after that it's work)
   }

  return (
    <div className='row'>
     <h1 style={{color:'White'}}>{title}</h1>
    </div>
  )
}

export default Row
