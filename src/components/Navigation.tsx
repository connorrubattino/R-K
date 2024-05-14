import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

type Props = {}

export default function Navigation({}: Props) {
  return (
    <Navbar bg='dark' expand='lg'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        src= '/src/assets/images/logo.png'
                        width="100"
                        height="50"
                        className="d-inline-block align-top ms-3"
                        alt="R&K Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapse'>
                    <Nav className='me-auto'>
                            <>
                                <Nav.Link className='text-white navbar-link' as={Link} to='/gallery'>Gallery</Nav.Link>
                                <Nav.Link className='text-white navbar-link' as={Link} to='/about'>About</Nav.Link>
                                <Nav.Link className='text-white navbar-link' as={Link} to='/contact'>Contact</Nav.Link>
                            </>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}