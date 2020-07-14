import React, { useState,useEffect } from 'react';
import formarCurrency from "./util"
import Fade from "react-reveal/Fade" 
import Modal from "react-modal"
import Zoom from "react-reveal/Zoom"
//import { connect } from 'react-redux';
import {fetchProducts} from "../actions/productActions"
import {useSelector,useDispatch} from "react-redux"

const Products = ({addToCart}) => {

    const dispatch = useDispatch()
  
    const data = useSelector(data=>{
        //console.log("Dentro de useSelector")
        //console.log(data.products.items)
        const products = data.products.items
        return products
    })
   // console.log("Quiero ver que tiene products",products)
    const [producto,setProduct] = useState(null)
    

    

    
    useEffect(()=>{
        //console.log("quiero ejecutar el fetch")
        dispatch(fetchProducts())
      
        
    },[dispatch])

  
    
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
                {
                    !data ? (<div>Loading...</div>):
                    (
                    <ul className="products">
                {data.map(product =>(
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
                    )
                }
            
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
