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

const Hero = () => {
  return (
    <section id="inicio" className="bg-light py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="fw-bold text-primary mb-3">
              Energía solar accesible y confiable para tu hogar o pyme
            </h1>
            <p className="text-muted mb-4">
              Diseñamos soluciones fotovoltaicas que reducen tus costos y
              aportan al futuro sustentable de Chile.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3">
              <Button
                variant="success"
                href="#demo-calculadora"
                className="fw-semibold"
              >
                Ver DEMO
              </Button>
              <Button
                variant="outline-primary"
                href="/catalogo-helioandes.pdf"
                className="fw-semibold"
              >
                Descargar Catálogo
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="mt-4 mt-md-0 text-center">
            <Image
              src="https://cdn.pixabay.com/photo/2016/03/01/09/54/solar-panel-1237288_1280.jpg"
              alt="Paneles solares HelioAndes"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
