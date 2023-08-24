import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto bg-slate-100">
      <div className='bg-sky-500/75 px-2 py-2'>
        <p class="text-2xl font-bold text-white">GitHub <span className='text-white font-normal' >Jobs</span> </p>
      </div>
      {children}
    </div>
  );
};

export default Container;