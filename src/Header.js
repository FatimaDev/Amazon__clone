import React from 'react'
import {Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'


function Header() {
    const [{basket}] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">

            {/* logo*/}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            {/* Search box*/}
            <div className="header_search">
             <input type="text" className="header__searchInput" />
             <SearchIcon className="header__searchIcon"/>
             </div>


            {/* links*/}
            <div className="header__nav">
            {/* 1st link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello,</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders </span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime </span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to="/checkout" className="header__link">
               <div className="header__optionBasket">
                 {/* Shopping basket icon */}
                 <ShoppingBasketIcon/>


                 {/* Number of items in the basket */}
                  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

               </div>
            </Link>
            

            </div>
            {/* Basket icon with number*/}


        </nav>
    )
}

export default Header
