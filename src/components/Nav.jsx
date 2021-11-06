import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Nav = () => {
  const navStyle = {
    color: 'white',
    textTransform: 'uppercase'
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
        <img
          className='nav-logo'
          src={logo}
          alt='site-logo'
          style={{ width: '80px' }}
        />
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/todos'>
          <li>Todos</li>
        </Link>
        <Link style={navStyle} to='/weather'>
          <li>Weather</li>
        </Link>
        <Link style={navStyle} to='/movies'>
          <li>Movies</li>
        </Link>
        <a
          style={navStyle}
          href='https://johns-react-blogs.netlify.app'
          target='_blank'
          rel='noreferrer'>
          <li>Blogs</li>
        </a>
        <Link style={navStyle} to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
