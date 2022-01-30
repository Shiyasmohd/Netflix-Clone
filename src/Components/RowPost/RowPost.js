import React,{useEffect,useState} from 'react';
import Youtube from 'react-youtube';
import './RowPost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/Constants'

function RowPost(props) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [originals,setOriginals] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setOriginals(response.data.results)
    })
  },[])
  const handleMovie = (id) =>{
    console.log(id)

      axios.get(`movie/${id}/videos?api_key=497a79f77dae113289c07ee758f80b66&language=en-US`).then((response)=>{
        if(response.data.results.lenght!=0){
          setUrlId(response.data.results[0].key)
        }else{
          console.log('Zero')
        }
      })
   }
  return (
  <div className="row"> 
      <h2>{props.title}</h2>
      <div className="poster">

        {originals.map((obj)=>{
          return(

            <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} className={props.isSmall ? "smallPosters" : "posters"}/>
          )
        })}
          
      </div>
      {urlId && <Youtube videoId={urlId} opts={opts} className="yVideo" />}
  </div>
  );
}

export default RowPost;
