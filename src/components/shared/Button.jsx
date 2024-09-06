/* eslint-disable react/prop-types */
const Button = ({ text, bgColor, textColor, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
