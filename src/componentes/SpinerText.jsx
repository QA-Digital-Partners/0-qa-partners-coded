import React from 'react';

const SpinAnimation = ({text}) => {

  const characters = text.split(""); // Dividimos el texto en caracteres individuales

  return (
    <div className="spin-container flex justify-center items-end ">
      <div className="animate-spin-slow">
        <div className="circular-text flex rounded-[50%] justify-center items-center">
          {characters.map((char, index) => (
            <span key={index} style={{ transform: `rotate(${index * (360 / characters.length)}deg)`}} className='pt-2 font-bold text-white'>
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpinAnimation;
