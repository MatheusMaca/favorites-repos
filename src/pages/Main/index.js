import React, { useState, useCallback } from "react";
import { Container, Form, SubimitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";
import api from "../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        const response = await api.get(`repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };

        setRepositorios([...repositorios, data]);
        setNewRepo("");
      }

      submit();
    },
    [newRepo, repositorios]
  );

  function handleInputChange(e) {
    console.log(e.target.value);
    setNewRepo(e.target.value);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorio
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositorios"
          value={newRepo}
          onChange={handleInputChange}
        ></input>
        <SubimitButton onSubmit={handleSubmit}>
          <FaPlus color="#FFF" size={14} />
        </SubimitButton>
      </Form>
    </Container>
  );
}
