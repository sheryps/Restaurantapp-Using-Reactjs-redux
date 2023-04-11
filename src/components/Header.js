import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.jpg'
function Header() {
  return (
    <>
      <Navbar bg="warning" variant="dark" className='rounded-bottom'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="60"
              className="d-inline-block align-top rounded-circle"
            />{' '}
            SG Inn
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header