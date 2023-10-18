
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

  const getValidate =(e)=>{
    const {name,value}=e.target 
    console.log(name,value);
    SetPrinciple(value)
  }
  return (
 <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
       <div className='bg-light p-5 rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate simple intrest Easily</p>
        <div className='shadow bg-warning d-flex justify-content-center align-item-center w-100 p-3 flex-column rounded mt-4 '>
          <h1>₹ {''} value={sinterst}</h1>
          <p>Total simple INtrest</p>
        </div>
        <form className='mt-5' >
          <div className='mb-3'>
            <TextField id="outlined-basic" name='principle' value={principle || ""} onChange={(e)=>getValidate(e)} className='w-100' label="Principle Amount" variant="outlined" /> 
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" name='rate' value={rate|| ""} className='w-100' label="Rate of Intrest (p.a) %" variant="outlined" />
          </div>
          <div className='mb-3'>
            <TextField id="outlined-basic" name='year' value={ year|| ""} className='w-100' label="year (Yr)" variant="outlined" />
          </div>
          <div><Stack direction="row" spacing={2} className='mt-5'>
          <Button variant="contained" className='bg-succes' style={{width:'200px',height:'50px'}}>Calculate</Button>
          <Button variant="outlined" style={{width:'200px',height:'50px'}}>Reset</Button>
            </Stack>
          </div>
        </form>
      </div>

 </div>
   
  );
}

export default App;
