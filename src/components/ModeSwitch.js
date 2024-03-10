import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from "react-icons/fa";

import '../styles/ModeToggler.scss';

const ModeSwitch = ({toggleTheme}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    toggleTheme(); // Call the toggleTheme function to change the theme
  };

  return (
    <div 
      className="container" 
      data-darkmode={isOn}
      onClick={handleToggle}
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="handle">
        <AnimatePresence initial={false} >
          <motion.i
            key={isOn ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }} 
            transition={{ duration: .2 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ModeSwitch;