import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '../icons/Icons';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  Icon,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-text-primary mb-1">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
             <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-primary focus:ring-primary sm:text-sm
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500' : 'border-border-color'}
          `}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {!error && helperText && <p className="mt-1 text-xs text-text-secondary">{helperText}</p>}
    </div>
  );
};

export default FormInput;