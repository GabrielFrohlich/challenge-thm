import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
            <Container>
                <BootstrapNavbar.Brand href="/">DisasterInformer</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/sobre-o-projeto">Sobre o Projeto</Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar