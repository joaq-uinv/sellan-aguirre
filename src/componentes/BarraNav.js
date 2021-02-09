import { React, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const mostrar = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavEstilada = styled.nav`
  height: 5rem;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  animation: ${mostrar} 2s ease;

  @media (max-width: 500px) {
    background: white;
    box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.5);
  }
`;

const NombreEstudioEstilado = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  text-decoration: none;

  @media (max-width: 500px) {
    background: white;
    color: #39454b;
  }
`;

const Hamburguesa = styled.div`
  display: none;

  @media (max-width: 500px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.75rem;
    color: #39454b;
  }
`;

const MenuEstilado = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;

  @media (max-width: 500px) {
    background: white;
    color: #39454b;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 5rem;
    left: ${({ menusAbiertos }) => (menusAbiertos ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const ItemMenuEstilado = styled.li`
  font-size: 1rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid white;
    transition: all 0.5s ease;
  }

  @media (max-width: 500px) {
    height: 5rem;
    width: 100%;
    background: white;
    color: #39454b;

    &:hover {
      border: none;
    }
  }
`;

const LinkEstilado = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media (max-width: 500px) {
    background: white;
    color: #39454b;
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #777;
      transition: all 0.5s ease;
    }
  }
`;

const BarraNav = () => {
  const [menusAbiertos, setMenusAbiertos] = useState(false);

  const onClick = () => setMenusAbiertos(!menusAbiertos);

  return (
    <NavEstilada>
      <NombreEstudioEstilado>Sellan & Aguirre Abogadas</NombreEstudioEstilado>
      <Hamburguesa onClick={onClick}>
        {menusAbiertos ? <FaTimes /> : <FaBars />}
      </Hamburguesa>
      <MenuEstilado onClick={onClick} menusAbiertos={menusAbiertos}>
        <ItemMenuEstilado>
          <LinkEstilado to="/">Inicio</LinkEstilado>
        </ItemMenuEstilado>
        <ItemMenuEstilado>
          <LinkEstilado to="/nosotras">Nosotras</LinkEstilado>
        </ItemMenuEstilado>
        {/* <ItemMenuEstilado>
          <LinkEstilado to="/areas">Áreas</LinkEstilado>
        </ItemMenuEstilado> */}
        <ItemMenuEstilado>
          <LinkEstilado to="/contacto">Contacto</LinkEstilado>
        </ItemMenuEstilado>
      </MenuEstilado>
    </NavEstilada>
  );
};

export default BarraNav;
