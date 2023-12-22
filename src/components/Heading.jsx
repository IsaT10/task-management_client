import React from 'react';

const Heading = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-center  bg-primaryColor px-4 md:px-6 py-1 md:text-base text-sm  -rotate-6 text-white font-gloria">
        {title}
      </h3>
      <h5 className="text-center text-2xl md:text-3xl font-bold mt-2 font-josep">
        {subTitle}
      </h5>
    </div>
  );
};

export default Heading;
