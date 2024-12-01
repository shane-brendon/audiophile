import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger'; // Limited to specific options
  text: string;
  disabled?: boolean; // Optional boolean to disable the button
  size?: 'small' | 'medium' | 'large'; // Optional size options
}

function Button({ variant, text, disabled = false, size = 'medium' }: ButtonProps) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`} 
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
