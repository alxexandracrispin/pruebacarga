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

const planes = [
  {
    nombre: "Básico",
    precio: "Desde $2.500.000",
    beneficios: [
      "Instalación residencial estándar",
      "Monitoreo básico",
      "Garantía 12 meses",
    ],
  },
  {
    nombre: "Optimizado",
    precio: "Desde $4.200.000",
    beneficios: [
      "Análisis energético detallado",
      "Instalación premium certificada",
      "Monitoreo en línea",
      "Garantía 24 meses",
    ],
  },
  {
    nombre: "Autónomo",
    precio: "Desde $6.800.000",
    beneficios: [
      "Sistema híbrido con baterías",
      "Asesoría avanzada",
      "Garantía 36 meses",
      "Mantención anual incluida",
    ],
  },
];

const Planes = () => {
  return (
    <section id="planes" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">
          Planes de Energía Solar
        </h2>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          {planes.map((plan, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column text-center">
                  <Card.Title className="fw-bold">{plan.nombre}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {plan.precio}
                  </Card.Subtitle>
                  <ListGroup variant="flush" className="mb-3">
                    {plan.beneficios.map((b, i) => (
                      <ListGroup.Item key={i}>{b}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button variant="primary" className="mt-auto">
                    Solicitar Evaluación
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Planes;
