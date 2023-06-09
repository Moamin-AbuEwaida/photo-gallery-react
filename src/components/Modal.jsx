import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        src={selected}
        alt="XLimage"
      />
    </motion.div>
  );
};

export default Modal;
