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

const testimonios = [
  {
    nombre: "María González",
    comuna: "Peñalolén",
    comentario:
      "Gracias a HelioAndes, ahora mi cuenta de luz bajó más del 70%. El proceso fue claro y rápido.",
  },
  {
    nombre: "Carlos Rivas",
    comuna: "Antofagasta",
    comentario:
      "Excelente servicio técnico y atención personalizada. La app de monitoreo es muy útil.",
  },
  {
    nombre: "Fernanda Soto",
    comuna: "Puerto Varas",
    comentario:
      "Instalamos un sistema híbrido con baterías. Funciona perfecto incluso en días nublados.",
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">
          Testimonios de Clientes
        </h2>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          {testimonios.map((t, i) => (
            <Col key={i}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Text className="fst-italic text-muted">
                    “{t.comentario}”
                  </Card.Text>
                  <Card.Title className="mt-3 text-success">{t.nombre}</Card.Title>
                  <Card.Subtitle className="text-muted">
                    {t.comuna}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonios;
