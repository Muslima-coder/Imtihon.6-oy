
import { HeroContent } from '../assets/images'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='hero-section sm:h-[880px] h-[480px] '>
        <div className="containers">
            <h2 className=' text-[25px] leading-[35px] mt-[15px] mb-[3px] sm:mt-[23px] text-center font-normal sm:text-[100px] text-[rgba(36,47,101,1)] sm:leading-[130px] '>Tell your creativity to the world with <span className='text-[rgba(255,119,76,1)]'> UIUXer</span></h2>
            <p className='mb-[15px] w-[300px] sm:w-[500px] mx-auto text-center font-normal sm:text-[25px] text-[rgba(36,47,101,1)] sm:leading-[37px] text-[14px] leading-[18px] '>UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.</p>
            <div className='justify-center flex items-center gap-[10px] mb-[30px] sm:mb-[60px]'>
                <Button title={"Buy Template"} extraClass={"bg-[#FF774C] border-[#FF774C] hover:text-[#FF774C]  "}/>
                <Button title={"Buy Template"} extraClass={"bg-[#7390F9] border-[#7390F9] hover:text-[#7390F9]  "}/>
            </div>
            <img  className='w-[150px] h-[150px] sm:w-[203px] sm:h-[205px] mx-auto' src={HeroContent} alt="img" />
        </div>
    </section>
  )
}

export default Hero