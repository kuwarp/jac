import React from 'react'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Article from '../../components/aboutbrand/Article';
import { bl01, bl02, bl03, bl04, bl05, bl06, bl07 } from './imports';
// import AJ from '../../components/yakuza-aj/aj';
import './brands.css';

const Brands = () => {
 
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Legendary of Yakuza, <br /> and more...</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={bl01} text="YAKUZA AJ-STAR -FEEL FIRE ON ROAD " />
      </div>
      <div className="gpt3__blog-container_groupB">
       {/* <Router exact path="../../components/yakuza-aj/aj" component={AJ}> */}
        <Article
         imgUrl={bl02} text="Yakuza - ERICKA feel pride on drive" />
      <Article imgUrl={bl03} text="Yakuza - Neu the power of flash" />
        <Article imgUrl={bl04} text="Yakuza - CK PHANTOM catches eyes on you" />
        <Article imgUrl={bl05} text="Yakuza - POPPY lets run on passion" />
        <Article imgUrl={bl06} text="Yakuza - DELTA king of offroad" />
        <Article imgUrl={bl07} text="Yakuza - RUBIE drive as smooth" />
      </div>
    </div>
  </div>
  )
}

export default Brands