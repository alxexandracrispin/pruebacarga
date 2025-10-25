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


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
