import React from 'react';

const Input = () => {
    
    const handleChange = (e) => {
        console.log(e.target.value);
    };
  return (
      <div className="flex justify-center m-5">
          <input
              type="text"
              className="h-5 w-5 text-blue-600"
          />
    </div>
  );
};

export default Input;