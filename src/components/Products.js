import React, { useState } from 'react';
import formarCurrency from "./util"
import Fade from "react-reveal/Fade" 
import Modal from "react-modal"
import Zoom from "react-reveal/Zoom"

const Products = ({products,addToCart}) => {
    //console.log(products)
    const [producto,setProduct] = useState(null)
    
    const openModal =(product)=>{
        setProduct(product)
        //console.log(producto)
    }
    const closeModal=()=>{
        setProduct(null)
    }
    return ( 
        <div>
            <Fade bottom  cascade>
            <ul className="products">
                {products.map(product =>(
                    <li key={product._id}>
                    <div className="product">
                        <a href={"#" + product._id} onClick={()=>openModal(product)}>
                            <img src={product.image} alt={product.title}></img>
                            <p>
                                {product.title}
                            </p>
                        </a>
                        <div className="product-price">
                            <div>
                                {formarCurrency(product.price)}
                            </div>
                                <button onClick={()=>addToCart(product)} className="button-primary">
                                    Add To Cart
                                </button>
                            
                        </div>
                    </div>
                    </li>
                ))}

            </ul>
            </Fade>
            {
                producto &&
                <Modal
                isOpen={true}
                onRequestClose={closeModal}
                >
                    <Zoom>
                        <button  className="close-modal" onClick={closeModal}>x</button>
                        <div className="product-details">
                            <img src={producto.image} alt={producto.title}></img>
                            <div className="product-details-description">
                                <p>
                                    <strong>{producto.title}</strong>
                                </p>
                                <p>
                                    {producto.description}
                                </p>
                                <p>
                                    Avariable Sizes :{" "}
                                    {producto.availableSizes.map(x=>(
                                        <span>
                                            {" "}
                                            <button className="button">{x}</button>
                                            </span>
                                    ))}
                                </p>
                                <div className="product-price">
                                    <div>
                                        {formarCurrency(producto.price)}
                                    </div>
                                        <button className="button-primary" onClick={()=>{closeModal(); addToCart(producto);}}>Add to Cart</button>
                                    
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
            }
        </div>
     );
}
 
export default Products
