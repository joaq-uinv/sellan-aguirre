import React from "react";
import styled, { css, keyframes } from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
//imgs
import Firma from "../imgs/firma.jpeg";
import Adriana from "../imgs/adriana.jpg";
import Betina from "../imgs/betina.jpg";

const mostrarContenedor = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const mostrarAdriana = keyframes`
from {
  transform: translateX(-100%);
} to {
  transform: translateX(0)
}
`;

const mostrarBetina = keyframes`
  from {
    transform: translateX(100%);
  } to {
    transform: translateX(0);
  }
`;

const ContenedorProsEstilado = styled.section`
  background-image: url(${Firma});
  background-size: cover;
  background-attachment: fixed, fixed;
  opacity: 1;
  width: 100%;
  min-height: 100vh;
  margin-top: -5rem;
  display: flex;
  justify-content: space-between;
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
    opacity: 0.15;
    pointer-events: none;
  }

  @media (max-width: 500px) {
    margin-top: 0;
    flex-direction: column;
    justify-content: center;
  }
`;

const CartaEstilada = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 30%;
  max-width: 50%;
  padding: 1rem;
  ${(props) => {
    if (props.adriana) {
      return css`
        animation: ${mostrarAdriana} 2s ease;
      `;
    } else {
      return css`
        animation: ${mostrarBetina} 2s ease;
      `;
    }
  }};

  @media (max-width: 500px) {
    width: 75%;
    padding: 0.5rem;
    margin: 1rem;
  }
`;

const ImgEstilada = styled.img`
  display: block;
  width: 15rem;
  height: 15rem;

  @media (max-width: 500px) {
    width: 7.5rem;
    height: 7.5rem;
  }

  @media (max-width: 400px) {
    width: 5rem;
    height: 5rem;
  }
`;

const InfoProEstilado = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const TituloProEstilado = styled.h1`
  font-size: 1.25rem;
  text-align: center;
  margin: 0.5rem 0;
  color: #39454b;
`;

const ContenedorDetallesEstilado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetallesProEstilado = styled.p`
  font-size: 1rem;
  font-weight: ${({ subtitulo }) => (subtitulo ? 600 : 400)};
  text-align: ${(subtitulo) =>
    subtitulo ? "center" : "justify"}; //! revisar esto
  color: #39454b;

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const LinkEstilado = styled.a.attrs({
  href: "https://ar.linkedin.com/in/adriana-sellan-94759334",
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #39454b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: #777;
    transition: all 0.5s ease;
  }
`;

const Pros = () => {
  return (
    <ContenedorProsEstilado>
      <CartaEstilada adriana>
        <ImgEstilada src={Adriana} />
        <InfoProEstilado>
          <TituloProEstilado>Adriana Sellan</TituloProEstilado>
          <ContenedorDetallesEstilado>
            <DetallesProEstilado subtitulo>Socia</DetallesProEstilado>
            <DetallesProEstilado>
              Abogada especializada en derecho de familia y sucesorio y en
              derecho laboral
            </DetallesProEstilado>
            <DetallesProEstilado>
              <LinkEstilado>
                <FaLinkedinIn />
                <p style={{ marginLeft: ".5rem" }}>Adriana Sellan</p>
              </LinkEstilado>
            </DetallesProEstilado>
          </ContenedorDetallesEstilado>
        </InfoProEstilado>
      </CartaEstilada>
      <CartaEstilada>
        <ImgEstilada src={Betina} />
        <InfoProEstilado>
          <TituloProEstilado>Betina Aguirre</TituloProEstilado>
          <ContenedorDetallesEstilado>
            <DetallesProEstilado subtitulo>Socia</DetallesProEstilado>
            <DetallesProEstilado>
              Abogada especializada en derecho de familia y sucesorio y en
              derecho societario
            </DetallesProEstilado>
            <DetallesProEstilado>
              <LinkEstilado>
                <FaLinkedinIn />
                <p style={{ marginLeft: ".5rem" }}>Betina Aguirre</p>
              </LinkEstilado>
            </DetallesProEstilado>
          </ContenedorDetallesEstilado>
        </InfoProEstilado>
      </CartaEstilada>
    </ContenedorProsEstilado>
  );
};

export default Pros;
