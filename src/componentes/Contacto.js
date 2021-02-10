import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import ImgBg from "../imgs/corte.JPG";

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
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }
`;

const mostrarForm = keyframes`
from {
  transform: translateY(100%);
} to {
  transform: translateY(0)
}
`;

const ContenedorContacto = styled.section`
  background-image: url(${ImgBg});
  background-size: cover;
  background-attachment: fixed, fixed;
  color: whitesmoke;
  /* background: #cfb997; */
  min-height: 100vh;
  width: 100%;
  margin-top: -5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${mostrarContenedor} 5s ease;

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
`;

const Encabezado = styled.h1`
  font-size: 2.5rem;
  animation: ${mostrarTxt} 2s ease;

  @media (max-width: 500px) {
    margin-top: 5rem;
  }
`;

const Comentario = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 2rem 0;
  text-align: center;
  animation: ${mostrarTxt} 2s ease;

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const FormEstilado = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.2);
  padding: 1rem;
  animation: ${mostrarForm} 2s ease;
`;

const ContenedorInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem 1.5rem;
  grid-template-areas:
    ". ."
    ". .";
  padding: 1rem;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const InputEstilado = styled.input`
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
`;

const SelectEstilado = styled.section`
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 1rem;
  padding: 1rem;
  outline: none;
`;

const ControlSelect = styled.div``;

const ValorElegido = styled.div`
  color: #777;
  font-size: 0.825rem;
  padding-top: 0.5rem;
`;

const Flecha = styled.div`
  position: relative;
  width: 0;
  height: 0;
  top: -0.625rem;
  left: 8.5rem;
  cursor: pointer;
  border-top: ${({ menuAbierto }) =>
    !menuAbierto ? ".5rem solid #777" : null};
  border-right: 0.5rem solid transparent;
  border-left: 0.5rem solid transparent;
  border-bottom: ${({ menuAbierto }) =>
    !menuAbierto ? null : ".5rem solid #777"};
`;

const ContenedorOpciones = styled.div`
  display: ${({ menuAbierto }) => (!menuAbierto ? "none" : "flex")};
  flex-direction: column;
  position: absolute;
  width: 149px;
  margin-top: 1rem;
  background: white;
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 0 0 0.5rem 0.5rem;
  text-align: center;
`;

const OpcionEstilada = styled.div`
  padding: 1px;
  color: #39454b;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background: #cfb997;
    color: white;
  }
`;

const TextAreaEstilada = styled.textarea`
  border: 1px solid rgba(128, 128, 128, 0.5);
  border-radius: 1rem;
  resize: none;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
`;

const BotonEstilado = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  outline: none;
  background: #cfb997;
  color: whitesmoke;
  font-size: 1rem;
  transition: all 0.4s ease;

  &:hover {
    color: #cfb997;
    background: whitesmoke;
  }
`;

const zonas = ["CABA", "GBA Norte", "GBA Oeste", "GBA Sur"];

const Contacto = () => {
  const [camposInputs, setCamposInputs] = useState({
    nombre: "",
    mail: "",
    telefono: "",
    msj: "",
  });
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [valorSelect, setValorSelect] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", cerrarOpciones);
    return () => {
      document.removeEventListener("click", cerrarOpciones);
    };
  }, []);

  const onChange = (e) =>
    setCamposInputs({ ...camposInputs, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setCamposInputs({ nombre: "", mail: "", telefono: "", msj: "" });
    setValorSelect(null);
  };

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const elegirValor = (valor) => {
    setValorSelect(valor);
    toggleMenu();
  };

  const cerrarOpciones = (e) => setMenuAbierto(e && e.target === ref.current);

  return (
    <ContenedorContacto>
      <Encabezado>Contactanos</Encabezado>
      <Comentario>
        Hacenos tu consulta para obtener el mejor asesoramiento personalizado.
      </Comentario>
      <FormEstilado onSubmit={onSubmit}>
        <ContenedorInputs>
          <InputEstilado
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={onChange}
            required
          />
          <InputEstilado
            type="email"
            name="mail"
            placeholder="Mail"
            onChange={onChange}
            required
          />
          <InputEstilado
            type="number"
            name="telefono"
            placeholder="N° de teléfono"
            onChange={onChange}
            required
          />
          <SelectEstilado>
            <ControlSelect>
              <ValorElegido>
                {valorSelect ? valorSelect : "Lugar de residencia"}
              </ValorElegido>
              <Flecha
                onClick={toggleMenu}
                menuAbierto={menuAbierto}
                ref={ref}
              />
            </ControlSelect>
            <ContenedorOpciones menuAbierto={menuAbierto}>
              {zonas.map((zona) => (
                <OpcionEstilada
                  name="zona"
                  onClick={() => elegirValor(zona)}
                  required
                >
                  {zona}
                </OpcionEstilada>
              ))}
            </ContenedorOpciones>
          </SelectEstilado>
        </ContenedorInputs>
        <TextAreaEstilada
          name="msj"
          placeholder="Escribir mensaje"
          onChange={onChange}
          required
        />
        <BotonEstilado type="submit">Enviar</BotonEstilado>
      </FormEstilado>
    </ContenedorContacto>
  );
};

export default Contacto;
