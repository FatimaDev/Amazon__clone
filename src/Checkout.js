import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format"
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
          <div className="checkout__left">
          <img className="checkout__ad"  src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Prime/XCM_Manual_1500x350_1210306_1210306_IN_Prime_Deals_7a028a6d_aba0_4767_9510_e5e013c3a81f_jpg_LOWER_QL85_.jpg" alt=""/>
           {/* <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>*/}
            {basket?.length === 0 ? (
                <div className="checkout__no_item">
                    <h2>Your Amazon Cart is empty</h2>
                    <p>
                        You have no items in your Cart.To buy one or more items, click "Add To Cart" next to the item
                    </p>
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Cart </h2>
                    {/* List  out All of Checkout Products  */}
                    {basket?.map(item => (
                     <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}

                     />
                    ))}
                </div> 
            )}
          </div>
              {basket.length > 0 && (
                  <div className="checkout__right">
                     <Subtotal/>

                  </div>
              )}
        </div>
    )
}

export default Checkout
