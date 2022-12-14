import Navbar from 'react-bootstrap/Navbar'
import '../App.css'
import { NavLink, Link } from 'react-router-dom'
import pokelogo from './assets/pokelogo.png'

const PokeNavbar = () => {
  return (
    <Navbar className='nav' bg='dark' variant='dark'>
        <Navbar.Brand>
            <Link to='/'>
                <img src={pokelogo} width='150px' alt='' />
            </Link>
        </Navbar.Brand>

        <div className='d-flex links'>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to='/'
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to='/Pokemon'
            >
                {'   '}Pokemon{'   '}
            </NavLink>
        </div>

    </Navbar>

  )
}

export default PokeNavbar