/* eslint-disable react/prop-types */
const Button = ({
  label,
  color,
  small,
  custom,
  disabled,
  onClick,
  Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md
      hover:opacity-80 transition  w-full border-slate-700 flex items-center justify-center
      gap-2
      border-none
      ${color === "black" && "bg-black text-white"}
      ${color === "blue" && "bg-blue-500 text-white"}
      ${color === "orange" && "bg-orange-500  text-white"}
      ${color === "white" && "bg-white text-black"}
      ${color === "slate" && "bg-slate-700 text-white"}
      ${small ? 'text-sm font-light' : 'text-md font-semibold'}  
      ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'}
      ${custom ? custom : ''}
      `}
    >
      {Icon && <Icon />}
      {label}
    </button>
  )
}

export default Button;