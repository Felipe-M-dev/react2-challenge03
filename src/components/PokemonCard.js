import '../App.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PokemonCard({pokemon}) {

    return (
        <>
            <div className='poke-card' >

                <div className='poke-img'>
                    <img src={pokemon.src} alt='pokemon-pic'/>
                </div>

                <div className='specs'>

                    <div className='pokemon-name'>
                        {pokemon.name}
                    </div>

                    <ul className='text-left'>
                        <div>
                            {pokemon.stats?.map((stat, i) =>(
                                <li key={i}>
                                    {stat.name}:{stat.base}
                                </li>
                            ))}
                        </div>
                    </ul>

                    <div className='pokemon-type'>
                        Type: {pokemon.types}
                    </div>
                </div>
            
            </div>
            <div className='back-btn'>
                <Link to='/Pokemon'>
                    <Button style={{padding: '0 5px 0 5px'}}>
                            volver
                    </Button>
                </Link>
            </div>
        </>
    )
}