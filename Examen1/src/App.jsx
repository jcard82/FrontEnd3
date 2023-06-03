import React, { useState } from 'react';
import Form from './components/Form';
//import Card from './components/Card';



const App = () => {
  const [datosVehiculo, setDatosVehiculo] = useState(null);

  const handleSubmit = (data) => {
    setDatosVehiculo(data);
  };

  return (
    <div className="container">
      <h1>Mercado Auto</h1>
      <h2>Llene el siguiente formulario y tenga la mejor oferta</h2>
      {datosVehiculo ? (
        <Card modelo={datosVehiculo.modelo} color={datosVehiculo.color} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;

