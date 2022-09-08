import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./aj.css";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
const Explore = (prpos) => {
  const location = useLocation();
  const state = location.state;
  return (
    <div className="cover">
      <Navbar/>
      <div className="pro-title">
        <h1>{state.from.b_name} electric scooter price, specifications, features:</h1>
      </div>
      <div className="product-wrapper">
        <div className="product-header">
          <div className="product-image">
            <div className="image-wrapper">
              <img src={state.from.img} alt="Bike A450" />
            </div>
          </div>
          <div className="product-overview">
            <div className="info-wrapper">
              <h1 className="product-title">{state.from.b_name}</h1>
              <h2 className="product-price">Price : </h2>
              <p className="product-rating">Rating : ⭐⭐⭐⭐⭐</p>
              <p className="product-des">
                Ather is an Indian brand, a startup which is dedicated to
                deliver best range of electric two wheelers in Indian electric
                vehicle market. This startup is founded by two IIT graduates in
                2013 and this ather 450 plus is fully designed and assembles in
                India with 20% of its parts Imported. This is not a budget range
                electric scooter but it can surly give the high end performant
                and user comfort.
              </p>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="tabel-wrapper">
            <table cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <th colSpan="2">POWER</th>
                </tr>
                <tr>
                  <td>Lead Acid</td>
                  <td>{state.from.p_lead_acid}</td>
                </tr>
                <tr>
                  <td>Lithium Phosphate</td>
                  <td>{state.from.p_lead_acid}</td>
                </tr>
                <tr>
                  <td>Lithium Phosphate</td>
                  <td>{state.from.p_lithium}</td>
                </tr>
                <tr>
                  <th colSpan="2">WEIGHT</th>
                </tr>
                <tr>
                  <td>With Lead Acid</td>
                  <td>{state.from.w_with_lead}</td>
                </tr>
                <tr>
                  <td>With Lithium Phosphate</td>
                  <td>{state.from.w_lithium}</td>
                </tr>
                <tr>
                  <th colSpan="2">BATTERY LIFE SPAN</th>
                </tr>
                <tr>
                  <td>With Lead Acid</td>
                  <td>{state.from.b_with_lead}</td>
                </tr>
                <tr>
                  <td>With Lithium Phosphate</td>
                  <td>{state.from.b_lithium}</td>
                </tr>
                <tr>
                  <th colSpan="2">CONSUMPTION OF UNITS</th>
                </tr>
                <tr>
                  <td>Lead Acid</td>
                  <td>{state.from.c_with_lead}</td>
                </tr>
                <tr>
                  <td>Lithium Phosphate</td>
                  <td>{state.from.c_lithium}</td>
                </tr>
                <tr>
                  <th colSpan="2">TIME FOR CHARGE</th>
                </tr>
                <tr>
                  <td>Lead Acid</td>
                  <td>{state.from.t_with_lead}</td>
                </tr>
                <tr>
                  <td>Lithium Phosphate</td>
                  <td>{state.from.t_lithium}</td>
                </tr>
                <tr>
                  <th colSpan="2">MOTOR</th>
                </tr>
                <tr>
                  <td>Type of Motor</td>
                  <td>{state.from.type_motor}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tabel-wrapper">
            <table cellSpacing="0" cellPadding="0">
              <tbody>
                <tr>
                  <th colSpan="2">CHASSIS</th>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{state.from.chassis_type}</td>
                </tr>
                <tr>
                  <th colSpan="2">SUSPENSION</th>
                </tr>
                <tr>
                  <td>Front</td>
                  <td>{state.from.s_front}</td>
                </tr>
                <tr>
                  <td>Rear</td>
                  <td>{state.from.s_rear}</td>
                </tr>
                <tr>
                  <th colSpan="2">BRAKES</th>
                </tr>
                <tr>
                  <td>Front</td>
                  <td>{state.from.b_front}</td>
                </tr>
                <tr>
                  <td>Rear</td>
                  <td>{state.from.b_rear}</td>
                </tr>
                <tr>
                  <th colSpan="2">SPECIAL FEATURES</th>
                </tr>
                <tr>
                  <td>{state.from.f1}</td>
                  <td>{state.from.f2}</td>
                </tr>
                <tr>
                  <td>{state.from.f3}</td>
                  <td>{state.from.f4}</td>
                </tr>
                <tr>
                  <td>{state.from.f5}</td>
                  <td>{state.from.f6}</td>
                </tr>
                <tr>
                  <td>{state.from.f7}</td>
                  <td>{state.from.f8}</td>
                </tr>
                <tr>
                  <td>{state.from.f9}</td>
                  <td>{state.from.f10}</td>
                </tr>
                <tr>
                  <td>{state.from.f11}</td>
                  <td>{state.from.f12}</td>
                </tr>
                <tr>
                  <td>{state.from.f13}</td>
                  <td>{state.from.f14}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>  
    </div>
  );
};

export default Explore;
