import React,{useState } from 'react';
import './App.css';
import Calculator from './component/Calculator';
import Heading from './component/Heading';

function App() {

  const [result, setResult]=useState("")
  
  
  return (
    <>
      <Heading/>
      <div className='content-calculator'>
           <Calculator results={result} setResult={setResult} />
      </div>
    </>
  );
}

export default App;
