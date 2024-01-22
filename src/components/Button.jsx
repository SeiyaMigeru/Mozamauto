const Button = ({label, iconURL, fullWidth}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7
    py-4 border font-montserrat text-lg leading-none hover:bg-stone-700 bg-stone-500 rounded-full
    text-white border-stone-500 ${fullWidth && 'w-full'}">
        {label}
        { iconURL && <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button