import { utility1, utility2, utility3, utility4, utility5 } from '../assets/images'
import { Card, Heading, Text } from '../components'

const Utilities = () => {
  return (
    <section className='pt-[120px] pb-[39px] bg-[#2A2C32] '>
        <div className="containers">
          <Heading title={"Utility Pages"}/>
          <Text title={"Default templates for your site & you can customize these pages to look the way you want."}/>
         
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