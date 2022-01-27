import React, { useEffect,useState } from 'react';
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../Constants/Constants'

function Banner() {

  const [state,setState] = useState()
  useEffect(()=>{
    axios.get('trending/all/week?api_key=${API_KEY}&language=en-US').then((response)=>{
      console.log(response.data)
    })
  },[])
  return (
    <div className="banner">
        <div className="content">

            <h1 className="title">Movie Name</h1>

            <div className="banner-btns">
                <button className="b-btn">Play</button>
                <button className="b-btn">Add</button>
            </div>

            <h1 className="description">
                Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
            </h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner;
