

const Card = ({srcImg, wImg, hImg, extraClass, text, extraClassText}) => {
  return (
    <div className="sm:w-[600px] w-[560px] ">
        <img className={`card-content rounded-[20px] mb-[39px] ${extraClass}`} src={srcImg} alt="photo" width={wImg} height={hImg}/>
        <strong className={`duration-300 hover:text-[rgba(255,119,76,1)] mb-[80px] text-center flex justify-center font-normal text-[25px] leading-[37px] text-[#242F65] ${extraClassText}`}>{text}</strong>
    </div>
  )
}

export default Card