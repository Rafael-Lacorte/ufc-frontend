import { Link } from 'react-router-dom'
import '../style/Header.css'


function Header() {

  return (
    <header>
        <nav className='header-nav'>
            <ul>
              <Link to="/fighters">
                <li>Fighters</li>
              </Link>
              <Link to={'/home'}>
                <li className="title"> UFC</li>
              </Link>
              <Link to={'/rankings'}>
                <li>Rankings</li>
              </Link>
            </ul>
        </nav>
    </header>
  )
}


export default Header
