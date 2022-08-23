import React from 'react'
// import { useNavigate } from 'react-router-dom';
import './cta.css'
function CTA() {
//     const navigate = useNavigate();
// const navigateToapply = () => {
//   navigate('/Dealer');
// };
  return (
    <div className="jac__cta">
    <div className="jac__cta-content">
      <p>Request to get started business with us!</p>
      <h3>Apply today for Dealership and make a part of happy wide family.</h3>
    </div>
    <div className="jac__cta-btn">
      <button type="button" >Apply</button>
    </div>
  </div>
  )
}

export default CTA