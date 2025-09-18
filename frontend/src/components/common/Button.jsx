// import React from 'react';
// import Spinner from './Spinner';

// const Button = ({
//   children,
//   onClick,
//   type = 'button',
//   variant = 'primary',
//   disabled = false,
//   isLoading = false,
//   fullWidth = false,
//   className = '',
// }) => {
//   const baseStyles = 'flex items-center justify-center font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
//   const variantStyles = {
//     primary: 'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
//     secondary: 'bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary',
//     tertiary: 'bg-transparent text-secondary border border-secondary hover:bg-secondary/10',
//     ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
//   };
//   const sizeStyles = 'px-6 py-3';
//   const widthStyle = fullWidth ? 'w-full' : '';
//   const disabledStyles = 'disabled:opacity-50 disabled:cursor-not-allowed';

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled || isLoading}
//       className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles} ${widthStyle} ${disabledStyles} ${className}`}
//     >
//       {isLoading ? <Spinner /> : children}
//     </button>
//   );
// };

// export default Button;
import React from 'react';
import Spinner from './Spinner';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  isLoading = false,
  fullWidth = false,
  className = '',
}) => {
  const baseStyles = 'flex items-center justify-center font-semibold rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Using ARBITRARY VALUES to bypass the theme config lookup issue.
  // This directly tells Tailwind which color to use.
  const variantStyles = {
    primary: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] focus:ring-[#2563eb]',
    secondary: 'bg-[#9333ea] text-white hover:bg-[#7e22ce] focus:ring-[#9333ea]',
    tertiary: 'bg-transparent text-secondary border border-secondary hover:bg-secondary/10',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  };

  const sizeStyles = 'px-6 py-3';
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyles = 'disabled:opacity-50 disabled:cursor-not-allowed';

  // Fallback to 'primary' if an invalid variant is provided
  const activeVariantStyles = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${activeVariantStyles} ${sizeStyles} ${widthStyle} ${disabledStyles} ${className}`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;