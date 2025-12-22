import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltWrapper = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width;
    const mouseY = (e.clientY - rect.top) / height;

    const rX = (mouseY * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export default TiltWrapper;
