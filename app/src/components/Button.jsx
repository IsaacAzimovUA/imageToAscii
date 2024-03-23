import React from 'react';

const Button = ({ style, children, type, onClick, href, target }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${style} mr-3 inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold shadow-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
        onClick={onClick}
        no-referrer
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${style} mr-3 inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold shadow-sm transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
    >
      {children}
    </button>
  );
};

export default Button;
