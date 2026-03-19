function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">FITNESS</div>

      <ul className="navbar__links">
        <li><a href="#hero">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICE</a></li>
        <li><a href="#page">PAGE</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;