import React from 'react';
import './style.scss';
import curatorPhoto from '../../images/VitoriaCaminha.png'

function CuratorItem () {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="foto da curadora Vitoria Caminha"/>
      </div>
      <div className="curator__details">
        <div>
        <h3>Vitória Caminha</h3>
        <h6>Curadoria</h6>
        </div>
        <p>Estudante de programação Front-end</p>
      </div>
    </div>
  )
}

export default CuratorItem