import React, { useState } from "react";
import "../../style/successful.css";

interface ReservationProp {
  valueAll: {
    name: string;
    email: string;
    phone: string;
    date: string;
    persons: string;
    time: string;
  };

  setShow: (value: boolean) => void;
  show: boolean;
}

const Succesful: React.FC<ReservationProp> = ({ valueAll, setShow, show }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="successful-container">
        <div className="closed-modal">
          <div className="successful-title">
            <div className="title">
              <h1>Your Reservation Is Done</h1>
            </div>

            <div className="close-btn">
              <button type="button" onClick={handleClose}>
                X
              </button>
            </div>
          </div>

          <div className="successful-reservation">
            <div className="reservation-details">
              <span>Name: {valueAll.name}</span>
              <span>Email: {valueAll.email}</span>
              <span>Phone: {valueAll.phone}</span>
              <span>Date: {valueAll.date}</span>
              <span>Persons: {valueAll.persons}</span>
              <span>Time: {valueAll.time}</span>
            </div>
            <div className="successful-thank">
              <div className="text">
                <p>Thanks For Your Reservation We Will Be On Touch </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Succesful;
