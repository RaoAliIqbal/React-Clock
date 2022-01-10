import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  
  let time = new Date().toLocaleTimeString();
  const[pretime,newtime] = useState(time);
  
  const updateTime=()=>{
    time= new Date().toLocaleTimeString();
    newtime(time)
  }

  setInterval(updateTime,1000);

  return (
    <div class="container">
      <h2>{pretime}</h2>
    </div>
  );
}

export default App;
