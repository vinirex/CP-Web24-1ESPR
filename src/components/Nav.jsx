import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';

function Nav() {
  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>{' '}
            {''}
            <Link to="/sobre" className="tlink">
              Sobre
            </Link>
            <Link to="/produtos" className="tlink">
              Produtos
            </Link>
            <Link to="/contato" className="tlink">
              Contato
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
