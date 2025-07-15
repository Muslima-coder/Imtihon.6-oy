
const Button = ({title, extraClass}) => {
    return(
        <button className={ `border-[2px] hover:bg-transparent duration-300 cursor-pointer w-[150px] h-[35px] sm:w-[259px] sm:h-[66px] rounded-[10px] font-normal text-[14px] leading-0 sm:text-[18px] sm:leading-[27px] text-[rgba(255,255,255,1)] ${extraClass} `}>{title}</button>
    )
} 

export default Button