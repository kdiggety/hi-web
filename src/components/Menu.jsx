import {Link} from 'react-router-dom'

function Menu() {
  return (
        <div className="app-menu">
          {
            <ul className='app-menu-list'>
              <li className='app-menu-item'>
                <Link to="/">Watchlist</Link>
              </li>
              <li className='app-menu-item'>
                <Link to="/search">Search</Link>
              </li>
              <li className='app-menu-item'>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          }
        </div>
  )
}

export default Menu