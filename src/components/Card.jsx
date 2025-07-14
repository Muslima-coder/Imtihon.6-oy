

const Card = ({srcImg, wImg, hImg, extraClass, text, extraClassText}) => {
  return (
    <div style={{ width: `${wImg}px`}}>
        <img className={`card-content rounded-[20px] mb-[39px] ${extraClass}`} src={srcImg} alt="photo" width={wImg} height={hImg}/>
        <strong className={`mb-[80px] text-center flex justify-center font-normal text-[25px] leading-[37px] text-[#242F65] ${extraClassText}`}>{text}</strong>
    </div>
  )
}

export default Card