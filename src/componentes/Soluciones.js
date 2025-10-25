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

const soluciones = [
  {
    titulo: "Hogar 3–5 kW",
    descripcion:
      "Ideal para viviendas que buscan independencia energética y ahorro mensual.",
    imagen:
      "https://cdn.pixabay.com/photo/2018/03/29/14/47/solar-3274893_1280.jpg",
  },
  {
    titulo: "Pyme 10–20 kW",
    descripcion:
      "Optimiza tus costos eléctricos y mejora la rentabilidad de tu negocio.",
    imagen:
      "https://cdn.pixabay.com/photo/2017/08/10/03/29/solar-panels-2618719_1280.jpg",
  },
  {
    titulo: "Off-grid con Baterías",
    descripcion:
      "Autonomía total en lugares sin red eléctrica, ideal para zonas rurales.",
    imagen:
      "https://cdn.pixabay.com/photo/2018/04/05/13/10/solar-energy-3292126_1280.jpg",
  },
  {
    titulo: "Sistemas Híbridos",
    descripcion:
      "Combina red eléctrica y almacenamiento para máxima seguridad y ahorro.",
    imagen:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/solar-1834391_1280.jpg",
  },
];

const Soluciones = () => {
  return (
    <section id="soluciones" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">
          Nuestras Soluciones
        </h2>
        <Row className="g-4">
          {soluciones.map((s, i) => (
            <Col key={i} xs={12} md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src={s.imagen}
                  alt={s.titulo}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>{s.titulo}</Card.Title>
                  <Card.Text>{s.descripcion}</Card.Text>
                  <Button variant="success" className="w-100">
                    Solicitar Asesoría
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

export default Soluciones;
