import { useState } from "react";
import axios from "axios";
import "../App.css"


const Citylist = ({props}) =>{
    const [cityname,setCityname] = useState({});
    const changeHandler = (e)=>{
        const {name,value} = e.target;
        setCityname({...cityname,[name]:value})
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        
       
        axios.post("http://localhost:8080/city",{...cityname}).then((res)=>{
            console.log(res.data);

        })
        .catch((error)=>{
            console.log(error)
        })
        .then(()=>{
            props()
        })
    }
    return (
        <form className = "rural" onSubmit={(e)=>{submitHandler(e)}}>
        <div>country:{" "}
        <input name = "city" className="city" type = "text" onChange = {(e)=>{changeHandler(e)}}/>
        </div>
        <div>population:{" "}
        <input name = "population" className="population" type = "number" onChange={(e)=>{changeHandler(e)}}/>
        </div>
        <div>
        <input classname = "submit" type= "submit" value = "submit"/>
        </div>
        <hr/>
        </form>
    )
}

export default Citylist