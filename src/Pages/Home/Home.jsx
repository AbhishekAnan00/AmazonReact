import React, { useContext, useState } from "react";
import "./Home.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CenterProduct } from "./CenterProduct/CenterProduct";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {
  const HeroList = [
    {
      id: 1,
      cover:
        "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/81nGHhDBoGL._SX3000_.jpg",
    },
    {
      id: 2,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img22/WLA/2024/Launches24/OnePlus/Buds3/Sale/5499/_tallhero_1500x600._CB582196764_.jpg",
    },
    {
      id: 3,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img24/Sports/January/GW/Hacer/5298-Sports---Sleeping-bags-hero--3000-X-1200_1._CB582132030_.jpg",
    },
    {
      id: 4,
      cover:
        "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_849526-T2/images/G/31/img24/Media/BAU/VDay24_GW_PC_Hero3-PCA-2X_2._CB582173539_.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? HeroList.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === HeroList.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="left-arrow" onClick={prevSlide}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="image">
          {HeroList.map((item, index) => {
            return current === index && <img src={item.cover} alt="" />;
          })}
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="centerproduct">
        <CenterProduct />
        <Footer />
      </div>
    </>
  );
};
