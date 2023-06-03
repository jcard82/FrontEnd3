import React from 'react';

const Card = ({ modelo, color }) => {
  return (
    <div>
      <h2>Detalles del vehículo:</h2>
      <p>Modelo: {modelo}</p>
      <p>Color: {color}</p>
    </div>
  );
};

export default Card;
