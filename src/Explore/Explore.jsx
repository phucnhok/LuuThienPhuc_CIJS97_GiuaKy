import React from 'react'

function Explore({ img, id, name, description, episode }) {
  return (
    <div>
      <div className='TextExplore'>
        <h2 style={{ marginBottom: "1px"}}>Explore</h2>
        <p style={{ marginTop: "5px", color:"darkgray" }}>What are you gonna wacth today ?</p>
      </div>
      <div className='BannerExplore'>
        <img src={img} style={{ width: "100%", height: "450px", filter: "brightness(0.65)" }} />
        <div className='TextinBanner'>
          <h1>{name}</h1>
          <p style={{color:"#bdbdbd", fontFamily:"monospace"}}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Explore