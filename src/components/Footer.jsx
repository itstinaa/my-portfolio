function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="#home" className="footer-logo">
        CHAMP<span>.</span>
      </a>

      <p>© {currentYear} Champ. Built with React and Vite.</p>

      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
    </footer>
  );
}

export default Footer;