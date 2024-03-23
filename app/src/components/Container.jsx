import React from 'react';

const Container = ({ children, maxWidth }) => {
  return (
    <section
      className={`mt-6 mx-auto w-full ${maxWidth} border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl`}
    >
      <div className="px-4">{children}</div>
    </section>
  );
};

export default Container;
