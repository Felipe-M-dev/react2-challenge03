import React from 'react'
import '../App.css'
import pokemon from '../components/assets/poke.png'

export default function Home() {
    return (
        <div className='pokemon-home'>
            <h1 className='main-title'>
                Bienvenido maestro Pokémon
            </h1>
        <img src={pokemon} alt='' width='400' />
        </div>
    )
}