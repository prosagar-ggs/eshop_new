import React,{useState} from "react";
import "./Header.css";
import { MdShoppingBasket , MdStorefront, MdSearch} from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header=()=>{
    const [{basket}, dispatch] = useStateValue();
    return(
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <MdStorefront className="header__logoImage"  />
                    <h2 className="header__logoTitle">eSHOP</h2>
                </div>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <MdSearch className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="nav__item">
                        <span className="nav__itemLinkOne">Hello Guest</span>
                        <span className="nav__itemLinkTwo">Sign In</span>
                    </div>
                </Link>
                <div className="nav__item">
                    <span className="nav__itemLinkOne">Your</span>
                    <span className="nav__itemLinkTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav__itemBasket">
                        <MdShoppingBasket className="nav__itemBasketIcon"/>
                        <span className="nav__itemLinkTwo nav__basketCount">{basket.length}</span>
                    </div>
                
                </Link>
                
            </div>
        </div>
    )
}
export default Header