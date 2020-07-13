import React,{useState} from 'react';
import data from "./data.json"
import Products from './components/Products';

const  App=()=> {

  const [products,setProducts] = useState(data.products)
  const[size,setSize] = useState("")
  const [sort,setSort] = useState("")
  
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products
              products={products}
            ></Products>
          </div>
          <div className="sidebar">
            Carts Item
          </div>
        </div>
      </main>
      <footer>
        Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
