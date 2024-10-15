import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from '../03-examples/LoadingMessage'
import { PokemonCard } from '../03-examples/PokemonCard'

export const Layout = () => {

  const {counter, decrement, increment} = useCounter(1)
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
    
    <h1>Informacion del pokemon</h1>
    <hr />

    {isLoading ? <LoadingMessage/> : <PokemonCard 
    id={counter} 
    name={data.name}
    sprites={[
      data.sprites.front_default,
      data.sprites.front_shiny,
      data.sprites.back_default,
      data.sprites.back_shiny
    ]}
    />}

    {hasError && <p>Error</p>}

    <button
    className='btn btn-primary mt-2'
    onClick={() => counter > 1 ? decrement() : null}
    >
      Anterior
    </button>
    <button
    className='btn btn-primary mt-2'
    onClick={() => increment ()}
    >
      Siguiente
    </button>
    
    </>
  )
}

