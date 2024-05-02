import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Member Details</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
