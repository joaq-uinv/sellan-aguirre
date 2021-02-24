import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ImgBg from "../imgs/uba.jpg";

const mostrarContenedor = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContenedorArticulos = styled.section`
  background-image: url(${ImgBg});
  background-size: cover;
  background-attachment: fixed, fixed;
  opacity: 1;
  width: 100%;
  min-height: 100vh;
  margin-top: -5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${mostrarContenedor} 3s ease;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: whitesmoke;
    opacity: 0.1;
  }
`;

const ContenedorArticuloInd = styled.section`
  background: white;
  color: #39454b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TituloArticulo = styled.h1``;

const CuerpoArticulo = styled.p``;

const Articulos = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const traerArticulos = async () => {
      try {
        const res = await fetch("http://localhost:1337/articulos");
        const datos = await res.json();
        setArticulos(datos);
      } catch (error) {
        console.log(error);
      }
    };

    traerArticulos();
  }, []);

  console.log(articulos.length);

  return (
    <ContenedorArticulos>
      {articulos.map((art) => (
        <ContenedorArticuloInd>
          <TituloArticulo>{art.tituloDeArticulo}</TituloArticulo>
          <CuerpoArticulo>{art.cuerpoDelArticulo}</CuerpoArticulo>
        </ContenedorArticuloInd>
      ))}
    </ContenedorArticulos>
  );
};

export default Articulos;
