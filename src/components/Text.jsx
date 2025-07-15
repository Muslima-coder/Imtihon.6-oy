const Text = ({title, extraCLass}) => {
  return (
    <p className={`font-normal text-[20px] leading-[30px] text-[#525665] text-center ${extraCLass}`}>{title}</p>
  )
}

export default Text