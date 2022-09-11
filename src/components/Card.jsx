import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className='contenedor-Card'>
      <div className='boton' onClick={onClose}> x </div>
      <div className="container-link">
        <Link className='link-name' to={`/ciudad/${id}`} >
          {name}
        </Link>
      </div>
      <div className="container-temperatura">
        <div className='temperatura'>
          <p> Max: {max}</p>
          <p> Min: {min}</p>
        </div>
        <div className='contenedor-img'>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='pepe' />
        </div>
      </div>
    </div>
  );
};
