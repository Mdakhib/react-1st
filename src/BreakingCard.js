import React from 'react';
import './BreakingCard.css'


function BreakingCard({ data }) {
    return (
      <div className="container-header">
          <div className="container">
        <img className="container_img" src={data.img}/>
        {/*  */}
        <h2 className="data_name">{data.name}</h2>
        <div className="data">
          <h3>Birthday: <span>{data.birthday}</span></h3>
          <h3>Status:<span>{data.status}</span></h3>
          <h3>Portrayed:<span >{data.portrayed}</span></h3>
          <h3>Appearance:<span >{data.appearance}</span></h3>
        </div>
      </div>
      </div>
    );
  }

export default BreakingCard