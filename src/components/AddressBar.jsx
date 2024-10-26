import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const AddressBar = () => {
  return (
    <React.Fragment>
      <div className="bg-light">
        <div className="d-flex justify-space-between align-items-center c-width-1 m-auto p-3">
          <div className="d-flex align-items-center justify-content-center">
            <ImLocation2 style={{fontSize: "1.5vw"}} />
            <h2 style={{fontSize: '1.5vw', marginLeft: "0.4vw", fontWeight: 'bold'}}>
              Evercare Hospital Lahore D1 Commercial, NECHS, Phase 1, Lahore
            </h2>
          </div>
          <div style={{width: "4vw"}} className="d-flex align-items-center justify-space-between">
            <Link to="https://www.facebook.com" target="_blank"><FaFacebook className="font-1-5"/></Link>
            <Link to="https://www.instagram.com" target="_blank"><FaInstagram className="font-1-5" /></Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddressBar;
