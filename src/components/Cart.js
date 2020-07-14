import React,{useState} from 'react';
import formarCurrency from "./util"
import {useFormik} from "formik"

const Cart = ({cartItems,removeFromCart,createOrder}) => {

    const [showCheckout,setShowCheckOut] = useState(false)

  const formik = useFormik({
      initialValues:{
          name:"",
          email:"",
          address:""
      },
      onSubmit:(values)=>{
          const {name,email,address}= values 
          const order ={
              name,
              email,
              address
          }
          createOrder(order)
      }
  })

   
 
    return (
       
        <div>
            {cartItems.length ===0?(
            <div className="cart cart-header">Cart is empty</div>):( 
            <div className="cart cart-header">You have {cartItems.length} in the cart {" "} </div>
            )}
            <div>
                <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item)=>(
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formarCurrency(item.price)} x {item.count}{" "}
                                            <button className="button" onClick={()=>removeFromCart(item)}>
                                            Remove
                                        </button>
                                        </div>
                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                </div>
                {cartItems.length!==0 && (
                    <div>
                     <div className="cart">
                     <div className="total">
                         <div>
                             Total : {" "}
                             {formarCurrency(cartItems.reduce((a,c)=>a + (c.price*c.count ),0))}
                         </div>
                         <button 
                         onClick={()=>setShowCheckOut(true)}
                         className="button-primary">Proceed</button>
                     </div>
 
                 </div>
                 {showCheckout && (
                     <div className="cart">
                        <form onSubmit={formik.handleSubmit}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" required onChange={formik.handleChange}/>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={formik.handleChange}/>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text" required onChange={formik.handleChange}/>
                                </li>
                                <li>
                                <button className="button-primary" type="submit">CheckOut</button>
                            </li>
                            </ul>
                           
                        </form>
                     </div>
                 )}
                 </div>
                )}
                
            </div>
        </div>
      
      );
}
 
export default Cart;