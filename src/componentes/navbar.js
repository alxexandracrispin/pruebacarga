import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Servicios from './componentes/Servicios';
import Soluciones from './componentes/Soluciones';
import CalculadoraIntegral from './componentes/CalculadoraIntegral';
import Planes from './componentes/Planes';
import Testimonios from './componentes/Testimonios';
import FAQ from './componentes/FAQ';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';

const NavbarHelioAndes = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold text-primary">
          HelioAndes Energía
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#soluciones">Soluciones</Nav.Link>
            <Nav.Link href="#demo-calculadora" className="fw-bold text-success">
              DEMO
            </Nav.Link>
            <Nav.Link href="#planes">Planes</Nav.Link>
            <Nav.Link href="#testimonios">Testimonios</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHelioAndes;
