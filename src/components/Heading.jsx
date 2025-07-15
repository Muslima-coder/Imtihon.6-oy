const Heading = ({title, extraCLass}) => {
  return (
    <h2 className={`mb-[10px] font-normal text-[40px] leading-[56px] text-[#242F65] text-center ${extraCLass} `}>{title}</h2>
  )
}

export default Heading