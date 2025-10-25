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

const servicios = [
  {
    titulo: "Estudio Energético",
    descripcion:
      "Analizamos tu consumo y orientación solar para ofrecerte la mejor solución.",
    icono: "⚡",
  },
  {
    titulo: "Instalación Certificada SEC",
    descripcion:
      "Instaladores acreditados garantizan la seguridad y cumplimiento normativo.",
    icono: "🛠️",
  },
  {
    titulo: "Monitoreo en Línea",
    descripcion:
      "Accede a tus datos de generación y consumo desde cualquier dispositivo.",
    icono: "📊",
  },
  {
    titulo: "Mantención Preventiva",
    descripcion:
      "Aseguramos la eficiencia de tu sistema con revisiones periódicas.",
    icono: "🔧",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">
          Nuestros Servicios
        </h2>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          {servicios.map((s, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <div className="display-4 mb-3">{s.icono}</div>
                  <Card.Title>{s.titulo}</Card.Title>
                  <Card.Text>{s.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Servicios;
