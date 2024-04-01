import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';


function Home() {
  return (
    <>
      <div className="container bg-image">
        <div className="produtos">
          <h1>Loja de Esportes</h1>

          <p>by Agnello</p>
          <Link to="/produtos" className="btn">
              Ver Produtos
            </Link>      
        </div>
      </div>
    </>
  );
}

export default Home;
