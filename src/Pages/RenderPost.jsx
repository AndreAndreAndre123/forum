
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import Home from "./Home"

const Post = () => {
    const navigate = useNavigate()
    
    const checkValue = () => {
        let value = document.querySelector("#id");
        console.log(value);
        /* navigate(`/post/${value}`) */
    }


  return (
    // Glöm inte att kolla att vi har data innan vi försöker skriva ut värden från data-objektet
    <div>
    
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