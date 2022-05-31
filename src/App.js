
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Cityfilter from './components/cityfilter';
import Citylist from './components/citylist';


function App() {
  const [city, setCity] = useState([]);
  const getdata = async()=>{
    axios.get("http://localhost:8080/cities").then((res)=>{
      setCity(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getdata();
  },[])
  return (
    <div className="App">
    <Citylist props = {getdata}/>
    <Cityfilter props = {{city,getdata}}/>
      
    </div>
  );
}

export default App;