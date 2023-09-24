import './NewProducts.css'
import startwo from "../../images/startwo.png";
import React, { useState, useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./ProductCard.js";
import arrow2 from "../../images/arrow2.png";
import arrow3 from "../../images/arrow3.png";
// import zIndex from '@material-ui/core/styles/zIndex';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{top:'800px',border:'Box',backgroundColor:'#eee', width:'20px', left:'60%' }}
      onClick={onClick}
    ><img className="" src={arrow2} alt="arrow" /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{top:'800px',border:'Box',backgroundColor:'#eee', width:'20px', left:'30%' }}
      onClick={onClick}
    ><img className="" src={arrow3} alt="arrow" /></div>
  );
}


function Products() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      handleGetData();
    }, [setData]);
  
    const handleGetData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          return res.json();
        })
        .then((jsonData) => {
          console.log(jsonData);
          setData(jsonData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    let settings = {
      infinite: false,
      speed: 1000,
      arrw:false,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
  
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
        <div className="productpage">
            <div className=' headline'>
                <div className=" product">
                    <div className='newproducts'>New products</div>
                    <img className="startwo" src={startwo} alt="star" />
                    <div className="line2"></div>
                    <ul className="functionality">
                        <li><div>Apparel</div></li>
                        <li><div><b>Accessiores</b></div></li>
                        <li><div>Best Sellers</div></li>
                        <li><div>50% off</div></li>
                    </ul>
                </div>
                <div className='arrow'>
                    
                </div>
            </div>
            <div className='slider'>
                <Slider {...settings}>
                {data.map((el) => {
                        return <ProductCard {...el} />;
                    })}
                </Slider>
          </div>
            
        </div>
    );
}
export default Products;

