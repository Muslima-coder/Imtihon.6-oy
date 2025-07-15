import {Ready1} from "../assets/images"
import { Button } from "../components"

const Ready = () => {
  return (
    <section className='ready-section overflow-y-hidden  pl-[60px] pt-[111px] pb-[70px] mt-[100px] mb-[99px] '>
        <div className="containers  flex items-center justify-between ">
            <div className='w-[510px] pb-[81px]'>
                <strong className='font-normal text-[#242F65] text-[30px] leading-[40px] sm:text-[40px] sm:leading-[56px] mb-[12px] '>Ready to get start <br /> with UIUXer?</strong>
                <p className='font-normal text-[#525665] text-[20px] leading-[30px] mb-[18px] '>Well-planned layouts with a clear structure that can be utilized to demonstrate your inventiveness in the digital business field.</p>   
                <Button title={"Get Start Now"} extraClass={"bg-[#FF774C] border-[#FF774C] hover:text-[#FF774C] "} />
            </div>
            <img className="sm:flex hidden" src={Ready1} alt="img" />
        </div>
    </section>
  )
}

export default Ready