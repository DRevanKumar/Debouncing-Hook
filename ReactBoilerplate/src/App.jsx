import { useEffect, useState } from 'react'

import './App.css'

function useDebounce(value,delay){
  const[debouncevalue,setDebouncevalue] = useState('');

  useEffect(()=>{
    const t= setTimeout(()=>{
      setDebouncevalue(value)
        
      }
    ,delay)
    return ( )=>{
      clearTimeout(t)
    }
  },[value,delay])
  return debouncevalue;
}

function App() {
  const[input,setInput]=useState('')
  const debouncevalue = useDebounce(input,500);
  
  

  return (
    <>
    <p> the debounced value is :  {debouncevalue}</p>
    <input type="text" value={input} onChange={ (e)=>{
      setInput(e.target.value)
    } }></input>
    </>
  )
}

export default App
