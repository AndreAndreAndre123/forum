
import { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Home from "./Home"
import axios from 'axios'

const Post = () => {

    const [data, setData] = useState(null);
    useEffect( () => {
        //Om vi vill använda oss utav axios som vi laddat ner med "npm install axios"
         axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => setData(res.data))
            
      
    }, []);
    console.log(data);
    const location = useLocation();
    console.log(location)

  return (
    // Glöm inte att kolla att vi har data innan vi försöker skriva ut värden från data-objektet
    <div>
        <h3>{location.state.title}</h3>
        <p>{location.state.body}</p>

        {
            data ? data.map((d) => {
                if(d.postId == location.state.id){
                    return (
                        <div>
                            <small>{d.name}</small>
                        </div>
                    )
                }

            }) : undefined
        }
    </div>
  )
}

export default Post

/* const Post = () =>{
    return(
        <div>
            adfafsd
        </div>
    )
}

export default Post; */