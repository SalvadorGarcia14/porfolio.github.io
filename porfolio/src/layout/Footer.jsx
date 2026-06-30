
const Footer = () => {
    const currentAnio = new Date().getFullYear();

  return (
    <footer>
        <p>&copy; {currentAnio} Mi Portfolio. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
