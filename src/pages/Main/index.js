import React from "react";
import { Container, Form, SubimitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorio
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositorios"></input>
        <SubimitButton>
          <FaPlus color="#FFF" size={14} />
        </SubimitButton>
      </Form>
    </Container>
  );
}
