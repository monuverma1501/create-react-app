import React from 'react'
import './MenuBar.css'
import car from "../../images/car.svg";
import facebook from "../../images/facebook.svg";
import linkedIn from "../../images/linkedIn.svg";
import tw from "../../images/tw.svg";
import insta from "../../images/insta.svg";

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="no-wrap">
                <div className="leftTopBar">
                    <div className="delivery-image">
                        <img src={car} alt="" />
                    </div>
                    <div className="return"><b>Free Delivery |</b> Return Policy</div>
                </div>
                <div className="rightTopBar">
                    <div >Login</div>
                    <div>follow Us</div>
                    <div>
                        <img className="socialimg" src={facebook} alt="facebook" />
                        <img className="socialimg" src={linkedIn} alt="linkedIn" />
                        <img className="socialimg" src={tw} alt="twitter" />
                        <img className="socialimg" src={insta} alt="insta" />
                    </div>
                </div>
            </div>
            <div className='shop'>
                <div className='shopkart'>
                    <p>ShopKart</p>
                </div>
                <div className='wishlistBag'>
                    <p >WISHLIST (0)&nbsp;&nbsp;&nbsp;BAG (0)</p>
                </div>
            </div>
            
            <div className="nav-wrapper">
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/AboutUs">ABOUT</a></li>
                    <li>
                        <a href="/#">
                            <select
                            style={{
                                backgroundColor:'black',
                                color: "white",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid white",
                            }}
                            name=""
                            id=""
                            >
                            <option value="">OUR PRODUCTS</option>
                            <option value="">PRODUCT 1</option>
                            <option value="">PRODUCT 2</option>
                            <option value="">PRODUCT 3</option>
                            <option value="">PRODUCT 4</option>
                            </select>
                        </a>
                    </li>   
                    <li><a href="/AboutUs">CONTACT US</a></li>             
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;