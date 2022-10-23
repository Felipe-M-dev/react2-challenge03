import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '../App.css'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState([])
    const [selectPokemon, setselectedPokemon] = useState('')
    const navigate = useNavigate()

    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0'

    const getPokemon = async () => {
        const res = await fetch(url)
        const { results } = await res.json()
        setPokemon(results)
    }

    const goToPokemon = () => {
        if (selectPokemon) navigate(`/pokemon/${selectPokemon}`)
        else alert('Debes seleccionar un Pokémon')
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <>
            <div className='selection'>
                <h1 >Selecciona un Pokémon</h1>
                <div className='selection-select'>
                    <select
                        value={selectPokemon}
                        className='form-select text-center'
                        onChange={(e) => setselectedPokemon(e.target.value)}
                    >
                        <option className='option' value='disabled' >
                            Pokemones
                        </option>
                        {pokemon.map((elem, i) => (
                            <option kei={i} value={elem.name}>
                                {elem.name}
                            </option>
                        ))}
                    </select>
                    
                    <Button onClick={goToPokemon} className='btn'>
                        Ver detalle
                    </Button>
                </div>
            </div>
        </>
    )
}