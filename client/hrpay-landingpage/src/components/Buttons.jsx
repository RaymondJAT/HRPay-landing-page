import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
  href,
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const baseStyles = `rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center ${
    fullWidth ? "w-full" : ""
  } ${sizeClasses[size]}`;

  const variants = {
    primary:
      "bg-[#D51C3D] text-white hover:bg-[#9C0C20] hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-gray-100 text-[#0D141A] hover:bg-gray-200 hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#0D141A] border border-gray-300 hover:border-[#D51C3D] hover:text-[#D51C3D]",
    ghost: "bg-transparent text-[#0D141A] hover:bg-gray-100",
  };

  const Component = href ? "a" : motion.button;
  const props = href
    ? { href }
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <Component
      type={!href ? type : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
