import React from "react";
import "../../style/message.css";

interface PropsFromReserve {
  setHide: (value: boolean) => void;
  hide: boolean;
  message: string;
}

const Message: React.FC<PropsFromReserve> = ({ hide, setHide, message }) => {
  const handleHideMessage = () => {
    setHide(false);
  };

  return (
    <>
      {hide && (
        <div className="message-container" data-aos="zoom-out">
          <div className="inner-message">
            <span>{message}</span>
            <button onClick={handleHideMessage}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
