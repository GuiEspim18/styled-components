import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import styled from "styled-components";
import { lightBackground } from "../UI/variables";
import Extract from "../Extract";

const Container = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

// Já que estamos usando o nome de container lá em cima transformamos essa função como export default exportando uma função anonima

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Content className="conteudo">
        <Conta />
        <Extract />
      </Content>
    </Container>
  );
};
