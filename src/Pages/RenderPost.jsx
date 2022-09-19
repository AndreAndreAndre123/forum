
import { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Home from "./Home"
import axios from 'axios'

const Post = () => {
    const {id} = useParams();
    const [article, setArticle] = useState(null)
    const [data, setData] = useState(null);
    useEffect( () => {
        
         axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => setData(res.data))

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setArticle(res.data))
            
      
    }, []);
    
    //testar location
    const location = useLocation();
    console.log(data);
    /* console.log(location); */

  return (
    <>
    <div className="post">
        <div className="post-title">
            <h1 className="post-h1">{article?.title}</h1>
            <h2 className="post-h1">{article?.body}</h2>
        </div>
        {
            data && data.map((d) => {
                if(d.postId == id){
                    return (
                        <div className="comment">
                            <div className="comment-name-email">
                                <h3>commentName: {d.name}</h3>
                                <h4>commentEmail: {d.email}</h4>
                            </div>

                            <p className="comment-body">{d.body}</p>
                        </div>
                    )
                }

            }) 
        }
    </div>
    </>
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