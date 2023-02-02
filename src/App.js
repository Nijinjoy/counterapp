import { useState } from 'react';
import './App.css';

function App() {
  //state-counter-To hold value
  const [counter,setCounter]=useState(0)

  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    if(counter!=0)
    setCounter(counter-1)
  }

  function reset(){
    setCounter(0)
  }
  return (
    <div
     style={{
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     border:'2px solid gray',
     margin:'10px',
     padding:'100px',
     backgroundColor:'gray'
   
     }}
    
    className="App">
      <header className="App-header">
      
<h3 
className='hi'

>Its Your Turn...!</h3>

       <h1
        className='text-center'
       
       >{counter}</h1>
       <button 

       className='a1'
       style={{
        margin:'5px',
        padding:'10px',
        border:'2px solid gray',
        width:'90px',
        borderRadius:'20px'
       }}
       
       onClick={increment}>ADD</button>

       <button

       className='b1'
            style={{
              padding:'10px',
              border:'2px solid gray',
              width:'90px',
              borderRadius:'20px'
             }}
       onClick={reset}>RES</button>

       <button

       className='s1'
           style={{
            margin:'5px',
            padding:'10px',
            border:'2px solid gray',
            width:'90px',
            borderRadius:'20px'
           }}

       onClick={decrement}>SUB</button>
      </header>
     
    </div>
  );
}
export default App;
