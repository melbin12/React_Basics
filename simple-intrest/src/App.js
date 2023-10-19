
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [sinterst,SetIntrest]=useState(0)
  const [principle,SetPrinciple] =useState(0)
  const[rate,setRate] =useState(0)
  const [year,setyear] = useState(0)
  const [isprinciple,setIsprinciple]= useState(true)
  const [israte,setIsrate] =useState(true)
  const [isyear,setIsyear] = useState(true)
  const getValidate =(e)=>{
    const {name,value}=e.target 
    // console.log(name,value);
    // console.log(!!value.match(/^[0-9]+$/)) it's given true or fales 
    if(!!value.match(/^[0-9]*?[0-9]+$/)){
    if (name==="principle"){
      SetPrinciple(value)
      setIsprinciple(true)}
    else if(name==="rate"){
      setRate(value)
      setIsrate(true)
    }
    else if(name==='year'){
      setyear(value)
      setIsyear(true)
    }
    }
    else{
     if(name==="principle"){
       SetPrinciple(value)
      setIsprinciple(false)}
    else if(name ==="rate"){
      setRate(value)
      setIsrate(false)
    }
    else if(name==="year"){
      setyear(value)
      setIsyear(false)
    }
    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Fil the form")
    }else{
      SetIntrest(principle*rate*year/100)
    }
  }

  const handleInitial=(e)=>{
    SetIntrest(0)
    SetPrinciple(0)
    setRate(0)
    setyear(0)
    setIsprinciple(true)
    setIsrate(true)
    setIsyear(true)
  }
  return (
 <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
       <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate simple intrest Easily</p>
        <div className='shadow bg-warning d-flex justify-content-center align-item-center w-100 p-3 flex-column rounded mt-4 '>
          <h1>₹ {''} {sinterst}</h1>
          <p>Total simple INtrest</p>
        </div>
        <form className='mt-5' onSubmit={(e)=>handleCalculate(e)}>
          <div className='mb-3'>
            <TextField id="outlined-basic" name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} className='w-100' label="Principle Amount" variant="outlined" /> 
          </div>
          {!isprinciple &&
          <div>
          <p className='text-danger fw-bolder'>*invalid</p>
          </div>}
          
          <div className='mb-3'>
           <TextField id="outlined-basic" name='rate' value={rate|| ""} onChange={(e)=>getValidate(e)}  className='w-100' label="Rate of Intrest (p.a) %" variant="outlined" />
          </div>
          {!israte &&
          <div>
          <p className='text-danger fw-bolder'>*invalid</p>
          </div>}
          <div className='mb-3'>
            <TextField id="outlined-basic" name='year' value={ year|| ""} onChange={(e)=>getValidate(e)}  className='w-100' label="year (Yr)" variant="outlined" />
          </div>
          {!isyear &&
          <div>
          <p className='text-danger fw-bolder'>*invalid</p>
          </div>}
          <div><Stack direction="row" spacing={2} className='mt-5'>
          <Button type='submit' disabled={isprinciple && israte && isyear?false:true} variant="contained" className='bg-succes' style={{width:'200px',height:'50px'}}>Calculate</Button>
          <Button onClick={(e)=>handleInitial(e)} variant="outlined" style={{width:'200px',height:'50px'}}>Reset</Button>
            </Stack>
          </div>
        </form>
      </div>

 </div>
   
  );
}

export default App;
