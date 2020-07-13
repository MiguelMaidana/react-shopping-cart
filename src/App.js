import React,{useState} from 'react';
import data from "./data.json"
import Products from './components/Products';
import Filter from './components/Filter';

const  App=()=> {

  const [products,setProducts] = useState(data.products)
  const[size,setSize] = useState("")
  const [sort,setSort] = useState("")

  const productoOriginal =()=>{
    const original = data.products
    return original
  }
  

   const sortProducts=(event)=>{
    //impl
    //setSort(event.target.value)
    //console.log(event.target.value)
    const sort1 = event.target.value
    setSort(sort1)
    const productosOrdenados = [...products]
    const p2 = productosOrdenados.slice().sort((a,b)=>(
      sort1 === "lowest"?
      ((a.price >b.price)?1:-1):
      sort1 ==="heighest"?
      ((a.price <b.price)?1:-1):
      ((a._id < b._id)?1:-1)
      
    ))
    setProducts(p2)

  }

  const filterProducts=(event)=>{

    //impl
    //const productoALL = products
    //console.log(products)
    const productActualizado1 =[...products]
    console.log(productActualizado1)
    setProducts(productoOriginal())

    if(event.target.value === "ALL"){
      setSize(event.target.value)
      setProducts(productoOriginal)

 
    }else{
      setSize(event.target.value)

      //console.log(event.target.value)
      const p2 = data.products.filter((product)=>product.availableSizes.indexOf(event.target.value)>=0)
      //console.log("Estoy en el else",p2)
      setProducts(p2)
    }
    

    
 
   

  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
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
