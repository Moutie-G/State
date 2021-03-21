import React ,{useState} from "react";
import moviecard from "./Movie Card" ;
import {stars} from "../assets/Data" ;
import {Button} from "react-bootstrap" ;
import AddMovie from "./AddMovie" ;

const MovieList = ({listMovie,addFilm}) =>{
    const [starList, setStarList] =useState(stars) ;
    const [search, setsearch] =useState("") ;
    const [show, setShow] = useState (false) ;

    const handleClose=() => setShow(false) ;
    const handleShow=() => setShow(true) ;
    const changeColor =(id) =>{
        setStarList( starList.map((star)=>star.id===id ?{...star, isColored : !star.isColored} :star ))  }
return (
    <div>
        <div className ="menu">
            <input type= "text" 
            placeholder="search"
            onChange ={(e)=>setsearch(e.target.value)}/>
            <button variant="primary" onClick={handleShow}>add movie</button>
       <div>
        {starList.map((star)
        <span key={star.id}
        onClick ={() =>changecolor}
        )}  
       </div>
        </div>
    </div>
)
}
