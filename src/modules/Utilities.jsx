import { utility1, utility2, utility3, utility4, utility5 } from '../assets/images'
import Card from '../components/Card'

const Utilities = () => {
  return (
    <section className='pt-[120px] pb-[39px] bg-[#2A2C32] '>
        <div className="containers">
        <h2 className='mb-[10px] font-normal text-[40px] leading-[56px] text-[#FFFFFF] text-center'>Utility Pages</h2>
        <p className='font-normal text-[20px] leading-[30px] text-[#FFFFFF] text-center'>Default templates for your site & you can customize these pages to look the way you want.</p>
         
         <div className='flex flex-wrap gap-[20px] items-center pt-[60px]'>
          <Card srcImg={utility1} text={"About Me"} wImg={600} extraClassText={"text-[#FFFFFF]"}/>
          <Card srcImg={utility2} text={"Blog"} wImg={600} extraClassText={"text-[#FFFFFF]"}/>
          <Card srcImg={utility3} text={"Blog Single"} wImg={600} extraClassText={"text-[#FFFFFF]"}/>
          <Card srcImg={utility4} text={"Contact Us"} wImg={600} extraClassText={"text-[#FFFFFF]"}/>
          <Card srcImg={utility5} text={"Contact Us"} wImg={600} extraClassText={"text-[#FFFFFF]"}/>
         </div>

        </div>
    </section>
  )
}

export default Utilities