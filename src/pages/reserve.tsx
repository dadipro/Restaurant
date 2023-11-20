import React, { useEffect, useState } from "react";
import "../style/reserve.css";
import "animate.css/animate.min.css";
import Succesful from "./modals/succesful";
import Message from "./modals/message";
import Aos from "aos";
import "aos/dist/aos.css";


const Reserve = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [date, setNewDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [hide, setHide] = useState<boolean>(true);

  const valueAll = {
    name,
    email,
    phone,
    date,
    persons,
    time,
  };

  const handleClick = () => {
    if (name && email && phone && persons && date && time) {
      setResult(JSON.stringify(valueAll));
      setShow(true);
    } else {
      setShow(false);
      setMessage("Please fill out all the fields to make your reservation.");
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="reservation">
        <div className="reservation-details">
          <div className="reservation-title">
            <h1>Reservation</h1>
            <p>
              Reserve your table at "Meal" for a delightful dining experience.
            </p>

            <div className="sub-reservation">
              <h3>To book your table, simply:</h3>
              <p>
                Use our online reservation system on this website. Pick your
                date, time, and the number of guests, and we'll confirm your
                reservation shortly.
              </p>
              <p>Call us at (555) 123-4567 for assistance or reservations.</p>
            </div>
          </div>

          <div className="input-reservation" data-aos="fade-right">
            <div className="first-inputs">
              <div className="input1">
                <div className="input-details">
                  <div>
                    <span>Name</span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <span>Email</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <span>Phone</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="second-input">
              <div className="second-details">
                <div className="input2">
                  <div>
                    <span>Number Of Persons</span>
                    <input
                      type="number"
                      value={persons}
                      onChange={(e) => setPersons(e.target.value)}
                    />
                  </div>

                  <div>
                    <span>Date</span>
                    <input
                      type="date"
                      onChange={(e) => setNewDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <span>Time</span>
                    <input
                      type="time"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="click-btn">
              <button type="button" onClick={handleClick}>
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="successful-modal" data-aos="zoom-in">
          <div className="inner-successful">
            <Succesful valueAll={valueAll} setShow={setShow} show={show} />
          </div>
        </div>
      )}

      {message && (
        <div className="message-modal" data-aos="fade">
          <div className="inner-message">
            <Message setHide={setHide} hide={hide} message={message} />
          </div>
        </div>
      )}
    </>
  );
};

export default Reserve;
