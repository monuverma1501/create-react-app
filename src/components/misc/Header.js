import React from 'react'
import { Link } from "react-router-dom"
import '../misc/Header.css';
import boy from "../../images/boy.svg";
import arrow from "../../images/arrow.png";
import star from "../../images/star.svg";
import starone from "../../images/starone.svg";

const Header = () => {
    return (
        <div className="mainbox">
            <div className="orangebox"></div>
            <div className="box">
                <div className="box-1">
                    <h1 className="fresh">Fresh</h1>
                    <h1 className="num">2022</h1>
                    <h1 className="look">Look</h1>
                </div>
                <div className="box-2">
                    <img className="image-1" src={star} alt="" />
                    <img className="image-2" src={boy} alt="" />
                </div>
            </div>
            
            <div className="line"></div>
                <img className="image-3" src={starone} alt="star" />
            <div className="see">
                <div><a href=" "className="seemore">See more&nbsp;</a></div>
                <div><img className="img" src={arrow} alt="arrow" /></div>
            </div>
        </div>
    )
}

export default Header;