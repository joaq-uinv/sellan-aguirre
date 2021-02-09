import React from "react";
import styled, { keyframes } from "styled-components";
//imgs
import ImgBg from "../imgs/ppal.jpg";
import Logo from "../imgs/logo-blanco.png";

const mostrarContenedor = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const mostrarTxt = keyframes`
  from{
    transform: translateY(100%)
  }
  to {
    transform: translateY(0)
  }
`;

const mostrarImg = keyframes`
from {
  transform: translateY(-100%);
} to {
  transform: translateY(0)
}
`;

const ContenedorInicialEstilado = styled.section`
  background-image: url(${ImgBg});
  background-size: cover;
  background-attachment: fixed, fixed;
  opacity: 1;
  width: 100%;
  min-height: 100vh;
  margin-top: -5rem;
  display: flex;
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
    opacity: 0.25;
  }

  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const ContenedorPpalEstilado = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const LogoEstilado = styled.img`
  width: 11rem;
  height: 10rem;
  margin-bottom: 1rem;
  animation: ${mostrarImg} 2s ease;

  @media (max-width: 500px) {
    width: 8.25rem;
    height: 7.5rem;
  }
`;

const TxtPPalEstilado = styled.p`
  font-size: 1.25rem;
  color: white;
  text-align: center;
  padding: 0 10rem;
  margin-top: 1rem;
  animation: ${mostrarTxt} 2s ease;

  @media (max-width: 500px) {
    font-size: 1rem;
    text-align: center;
    padding: 0 5rem;
  }
`;

const Inicio = () => {
  return (
    <ContenedorInicialEstilado>
      <ContenedorPpalEstilado>
        <LogoEstilado src={Logo} />
        <TxtPPalEstilado>
          En Sellan & Aguirre buscamos asesorar de manera integral a nuestros
          clientes en todos los aspectos vinculados al desarrollo de sus
          actividades tanto personales como empresariales. Para ello contamos
          con los mejores y más dedicados profesionales del derecho civil y
          comercial.
        </TxtPPalEstilado>
      </ContenedorPpalEstilado>
    </ContenedorInicialEstilado>
  );
};

export default Inicio;
