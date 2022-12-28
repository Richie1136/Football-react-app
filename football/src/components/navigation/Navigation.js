import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => (
  <nav className='nav'>
    <NavLink to='/'>
      <span>Home</span>
    </NavLink>
    <NavLink to='/standings'>
      <span>Standings</span>
    </NavLink>
  </nav>
)

export default Navigation