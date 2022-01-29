import React,{useEffect,useState} from 'react';
import './RowPost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function RowPost(props) {
  const [originals,setOriginals] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setOriginals(response.data.results)
    })
  },[])
  return (
  <div className="row"> 
      <h2>{props.title}</h2>
      <div className="poster">

        {originals.map((obj)=>{
          return(

            <img src={`${imageUrl+obj.backdrop_path}`} className={props.isSmall ? "smallPosters" : "posters"}/>
          )
        })}
          
      </div>
  </div>
  );
}

export default RowPost;
