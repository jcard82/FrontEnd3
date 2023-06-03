import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [modelo, setModelo] = useState('');
  const [color, setColor] = useState('');
  const [error, setError]= useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modelo.trim().length < 3 || color.trim().length < 6) {

        console.error("Debe ingresar un modelo valido")
        setError("Debe ingresar un modelo valido")
    } else {
      onSubmit({ modelo, color });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Modelo:
        <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        
      </label>
      <br />
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
