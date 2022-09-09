import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'


const Post = () => {
    // Vi kan hämta id-värdet från den URL med hjälp utav useParams (för att vi har :id i vår route i App.js)
    const {id} = useParams()
    const [data, setData] = useState(null);
    useEffect( () => {
        //Om vi vill använda oss utav axios som vi laddat ner med "npm install axios"
         axios.get(` https://jsonplaceholder.typicode.com/posts`)
            .then(res => setData(res.data))
            
      
    }, []);
    console.log(data)
  return (

    <div>
        {data ?  data.map((d) => {
            return(
            <h2 id={d.id}>Titel: {<Link to="/renderposts" state={ d }> <p>Title: {d.title}</p></Link>}</h2>
            )

        }) : <h3>Loading...</h3>}
    </div>


    // Glöm inte att kolla att vi har data innan vi försöker skriva ut värden från data-objektet
 /*    <div>
        {data ? <>
        <h3>Title: {data.title}</h3>
        <h3>Body: {data.body}</h3>
        </> : <h3>Loading...</h3>}
    </div> */
  )
}

export default Post