import SearchMovie from '../components/SearchMovie'
import Logo from './Logo'
import NumResult from './NumResult'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Logo />
      <SearchMovie />
      <NumResult />
    </nav>
  )
}

export default NavBar
