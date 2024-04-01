import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Navbar.css'

function SiteNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-size">
      {/* <Container className='navbar-order'> */}
        <div className='navbar-order'>
            <Navbar.Brand>
            <Link className='home-page' to="/home">Black Jack Trainer</Link>
                </Navbar.Brand>
            <div className='navbar-links'>
                <Link className='nav-link' to="/rules">Rules</Link>
                <Link className='nav-link' to="/practice">Practice</Link>
            </div>
        </div>
          <div className='signin-link' >
            <Link className='nav-link' to="/login">Sign In</Link>
          </div>
      {/* </Container> */}
    </Navbar>
  );
}

export default SiteNavbar;