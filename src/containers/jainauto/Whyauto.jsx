import React from 'react'
import Feature from '../../components/Feature/Feature';
import './Whyjac.css'
const Whyauto = () => {
  return (
    <div className="jac__whatjac section__margin" id="wjac">
    <div className="jac__whatjac-feature">
      <Feature title="Jain Auto Corporation" text=" " />
    </div>
    {/* <div className="jac-map-image">
      <img src={Mp} alt="" />
    </div> */}
    <div className="jac__whatjac-heading">
      <h1 className="gradient__text">Leads a corporation of E-Vehicle</h1>
      <p>Our Services</p>
    </div>
    <div className="jac__whatjac-container">
      <Feature title="Trust" text="Trust is very important betweeen customer and dealer, we asure to stands always with our customers.." />
      <Feature title="Suports 24 x 7" text="Customers are feel free to calls anytime. we available everytime." />
      <Feature title="Wide range Network" text="We created a wide area network in Madhya Predesh. All parts are available  at reliable costs" />
    </div>
  </div>
  )
}

export default Whyauto