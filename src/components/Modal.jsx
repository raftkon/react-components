import React, { useEffect } from "react";
import ReactDOM from "react-dom";

/**
 * Because there might be a positioned parent element (not static, e.g. relative),
 * we need to use a portal so that the direct parent is the body
 * 1. we create a div in index.html
 * 2. we import ReactDOM and createPortal as seen below
 * 3. we select the div element in the index.html
 *
 */

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed bg-gray-300 inset-0 opacity-80"
      ></div>
      <div className="fixed bg-white p-10 inset-40">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
