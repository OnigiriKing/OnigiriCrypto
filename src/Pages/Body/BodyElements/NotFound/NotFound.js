import "./style.css"
import React from "react"
import { useNavigate } from "react-router-dom"
import funny1 from "./img/funny1.png"
import funny2 from "./img/funny2.png"
import funny3 from "./img/funny3.png"

export default function NotFound() {

    const randomNum = Math.floor(Math.random() * 3);
    const funnyPics = [funny1, funny2, funny3]
    const imageUrl = funnyPics[randomNum];
    const navigate = useNavigate()

    React.useEffect(()=>{
        setTimeout(()=>{navigate(-1)}, 2000)
    })

    return (
      <div className="ErrorWrapper">
        <h1>Sorry, we can't find this page</h1>
        <p>But don't worry, here is a funny picture for you</p>
        <img src={imageUrl} />
      </div>
    );
}