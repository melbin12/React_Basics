import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:'none',color:'white',fontSize:'30px'}}>
            <i class="fa-solid fa-video fa-beat text-warning me-3"></i>
            Vidio Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
    </div>
  )
}
