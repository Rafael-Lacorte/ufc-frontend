import { Link } from 'react-router-dom'
import '../style/Header.css'


function Header() {

  return (
    <header>
        <nav className='header-nav'>
            <ul>
                <li><Link to="/fighters">Fighters</Link></li>
                <li className="title">  <Link to={'/home'}> UFC</Link></li>
                <li><Link to={'/rankings'}>Rankings</Link></li>
              
            </ul>
        </nav>
    </header>
  )
}


export default Header
