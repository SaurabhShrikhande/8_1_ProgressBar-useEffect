import './App.css';
import { useEffect, useState } from "react";

function App() {
    const [filled , setfilled] = useState(0);
     const [loading, setrunning] = useState("loading...");


   useEffect(()=> {
  if(filled < 100){
    setTimeout(() => setfilled(prev => prev += 1), 50)
  }
  if(filled === 100){
    setrunning("completed!")
  }

   }, [filled])

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="bar" >
          <div className="fill" style={{width:`${filled}%` , backgroundColor : filled < 35 ? "red" : "green"}}>
                  <p style={{height:"100%", margin:"0" , marginLeft:"240px", color: filled < 50 ? "black":"white"}}>{filled}</p>  
          </div>
      </div>
          <div style={{margin:"5px"}} >{loading}</div>
          <button style={{margin: "10px", borderRadius:"10px", padding:"5px 15px",}}
          onClick={() => setfilled(0)}> Refresh</button>
    </div>
      
  );
}

export default App;
