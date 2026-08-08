function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        @christinehampt
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact" className="nav-contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;