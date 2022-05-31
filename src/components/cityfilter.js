import axios from "axios";
import "../App.css"


 const Cityfilter = ({props}) => {
 
    const deleteElement = (del)=>{
        axios
        .delete(`http://localhost:8080/cities/${del}`)
        .then((res)=>{
            props.getdata()
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const editElement = (del)=>{

        axios
        .delete(`http://localhost:8080/cities/${del}`)
        .then((res)=>{
            props.getdata();
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div>
    <div>
    <select onClick = {()=>{}}>
    <option value = "asc">+ order</option>
    <option value = "dsc">- order</option>
    </select>
    </div>
    <div>
    <table className = "table">
    <thead>
    <tr>
    <th>Id</th>
    <th>Country name</th>
    <th>City name</th>
    <th>Population</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {props.city.map((ele,index)=>{
        return (
            <tr key = {index}>
            <td>{index+1}</td>
            <td>{ele.Country}</td>
            <td>{ele.City}</td>
            <td>{ele.Population}</td>
            <td><button onClick={()=>{editElement(ele.id)}}>Edit</button></td>
            <td><button onClick={()=>{deleteElement(ele.id)}}>Delete</button></td>
            </tr>
        )
    })}
    </tbody>
    </table>
    </div>
    </div>
  )
  
}

export default Cityfilter
