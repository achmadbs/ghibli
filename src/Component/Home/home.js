import React from 'react';
import { NavBar } from './style';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Home = () => {

  const headerNav = () => {
    return (
      <NavBar>
        <li>
          <Link to='/Home'>
            <Icon name='home' />
          </Link>
        </li>
        <li>
          <Link to='/Film'>
            <button>Film</button>
          </Link>
        </li>
        <li>
          <Link to='/Human'>
            <button>Human</button>
          </Link>
        </li>
        <li>
          <Link to='/Location'>
            <button>Location</button>
          </Link>
        </li>
        <li>
          <Link to='/Species'>
            <button>Species</button>
          </Link>
        </li>
        <li>
          <Link to='/Vehicle'>
            <button>Vehicle</button>
          </Link>
        </li>
      </NavBar>
    );
  }

  return headerNav()
}

export default Home