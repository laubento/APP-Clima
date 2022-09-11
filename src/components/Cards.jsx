import React from 'react';
import './Cards.css';
import ubicacion from '../img/ubicacion.png'
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      <div className='tituloyimg'>
        <img className='img' src={ubicacion} alt='pepe' />
        <h1 className='titulo'> Ciudades </h1>
      </div>
      {cities.map(c => <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
