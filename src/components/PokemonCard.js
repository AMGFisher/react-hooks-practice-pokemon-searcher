import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from 'react'

function PokemonCard({pokemon}) {

  const [pokePic,setPokePic] = useState(true)

  function handleClick() {
    setPokePic(!pokePic)
}

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
        {pokePic ? 
        <img alt="oh no!" src={pokemon.sprites.front}/> :
        <img alt="oh no!" src={pokemon.sprites.back}/>
        }
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} HP
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
