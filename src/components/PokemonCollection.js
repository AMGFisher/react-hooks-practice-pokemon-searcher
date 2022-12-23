import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import {useState,useEffect} from 'react'

function PokemonCollection({searchTerm}) {

  const [pokemons,setPokemon] = useState([])

  const fetchPokemon = async () => {
    const req = await fetch('http://localhost:3000/pokemon')
    const res = await req.json()
    setPokemon(res)
  }
  useEffect(()=>{
    fetchPokemon();
  },[])

  const filteredPokemon = pokemons.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemon.map((pokemon)=>{
        return(
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
