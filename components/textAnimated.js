import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed here
      return () => clearTimeout(timeout);
    } else {
      const fadeOutTimeout = setTimeout(() => {
        setIsVisible(false);
        onComplete(); // Call the onComplete callback to trigger the next animation
      }, 1000); // Adjust the delay before fading out
      return () => clearTimeout(fadeOutTimeout);
    }
  }, [index, displayedText, text, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Adjust fade-out duration
          className="inline-block"
        >
          {displayedText}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default AnimatedText;
