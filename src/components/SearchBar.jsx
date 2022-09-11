import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [estado, setEstado] = useState('')
  return (
    <div className="container-principal-buscador">
      <form class="formulario" onSubmit={(e) => {
        e.preventDefault();
        onSearch(estado);
        setEstado('');
      }}>
        <input
          className="inputMovement"
          value={estado}
          onChange={e => setEstado(e.target.value)}
          aria-label="Search"
          type="text"
          placeholder="Ciudad..."
        />
        <button class="boton-agregar" type="submit">Agregar</button>
      </form>
    </div>
  );
}
