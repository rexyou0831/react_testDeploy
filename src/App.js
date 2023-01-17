import './App.css';
import axios from 'axios';
import { useEffect } from 'react'

function App() {

  useEffect(()=>{

    axios.get("https://cors-everywhere.herokuapp.com/http://samplesearchdatabase-env.eba-v3ihuwv4.ap-southeast-1.elasticbeanstalk.com/api")
    .then(response=>{
      
      if(response.status !== 200){ alert("API GG Detsu!") }

      console.log(response.data);

    });

  }, []);

  return (
    <div className="App">
      <h1>Testing field</h1>
    </div>
  );
}

export default App;
