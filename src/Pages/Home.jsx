import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = () => {
    const [data, setData] = useState(null);
    useEffect( () => {
         axios.get(` https://jsonplaceholder.typicode.com/posts`)
            .then(res => setData(res.data))
    }, []);
 
  return (
    <div>
        {data ?  data.map((d, i) => {
            return(
            <div id={d.id} key={i} className="title-div">

               {<Link to={`/renderpost/${d.id}`} state={ d } className="title-div-title">
                 <h2 className="title-div-title">{d.title}</h2>
               </Link>}
               
            </div>
            )

        }) : <h3>Loading...</h3>}
    </div>
  )
}

export default Post