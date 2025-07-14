
const Button = ({title, extraClass}) => {
    return(
        <button className={ `border-[2px] hover:bg-transparent duration-300 cursor-pointer w-[259px] h-[66px] rounded-[10px] font-normal text-[18px] leading-[27px] text-[rgba(255,255,255,1)] ${extraClass} `}>{title}</button>
    )
} 

export default Button