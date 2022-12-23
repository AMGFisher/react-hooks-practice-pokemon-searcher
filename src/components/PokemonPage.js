import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState} from 'react'

function PokemonPage() {
  const [searchTerm,setSearchTerm] = useState("")

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection searchTerm={searchTerm} />
    </Container>
  );
}

export default PokemonPage;
