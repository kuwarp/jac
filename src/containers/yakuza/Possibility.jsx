import React from 'react'
import yakuzael from '../../assets/electric.jpg';
import './possibility.css';

const Possibility = () => {
 
  
  return (
    <div className="jac__possibility section__padding" id="possibility">
    <div className="jac__possibility-image">
      <img src={yakuzael} alt="possibility" />
    </div>
    <div className="jac__possibility-content">
      {/* <h4>Request Early Access to Get Started</h4> */}
      <h1 className="gradient__text">Future for <br /> Save Earth from pollution </h1>
      <p>Yet bad to know how  we destroy our soil and environment <br /> we all are facing many causes of deases comes from vehcile pollution. <br />Say to No Let&apos;s drive eco-friendly.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility