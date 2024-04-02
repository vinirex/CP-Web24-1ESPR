import {} from 'react';
import '../css/estilo.css';
import Produto1 from '../assets/produto1.png'
import Produto2 from '../assets/produto2.png'
import Produto3 from '../assets/produto3.png'
function Portifolio() {

  return (
    <>
      <section className="portifolio bg-image">

        <h1>Nossos Produtos</h1>
        <div className='card-cont'>
          <div className="card">
                  <img src={Produto1}/>
                  <h3>Nome do Produto</h3>
                  <p>Descrição do produto a ser vendido</p>
                  <button>R$ 100,00</button>
              </div>      

              <div className="card">
                  <img src={Produto2}/>
                  <h3>Nome do Produto</h3>
                  <p>Descrição do produto a ser vendido</p>
                  <button>R$ 100,00</button>
              </div> 

              <div className="card">
                  <img src={Produto3}/>
                  <h3>Nome do Produto</h3>
                  <p>Descrição do produto a ser vendido</p>
                  <button>R$ 100,00</button>
              </div> 
        </div>
      </section>
    </>
  );
}
export default Portifolio;