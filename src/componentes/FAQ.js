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

const FAQ = () => {
  return (
    <section id="faq" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold">
          Preguntas Frecuentes
        </h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>¿Qué garantía ofrecen los sistemas?</Accordion.Header>
            <Accordion.Body>
              Todos nuestros sistemas cuentan con garantía mínima de 12 meses,
              extensible hasta 36 meses según el plan contratado.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>¿Qué incluye la mantención?</Accordion.Header>
            <Accordion.Body>
              Revisión de conexiones, limpieza de paneles, y verificación del inversor
              para asegurar la eficiencia energética.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Puedo monitorear la producción de energía?
            </Accordion.Header>
            <Accordion.Body>
              Sí, todos nuestros sistemas incluyen monitoreo online para visualizar la
              generación y consumo desde tu celular o computador.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>¿Cuánto demora la instalación?</Accordion.Header>
            <Accordion.Body>
              Generalmente entre 3 y 7 días hábiles dependiendo de la complejidad del
              proyecto y condiciones del techo.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿Cuáles son los requisitos eléctricos?
            </Accordion.Header>
            <Accordion.Body>
              Contar con una instalación eléctrica segura y certificada. Nosotros te
              orientamos para cumplir con la normativa SEC.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
