import { sCase1, sCase2 } from '../assets/images'
import { Card, Heading, Text } from '../components'

const CaseSttudies = () => {
  return (
    <section className='pt-[120px] pb-[39px] bg-[#EDF0F9] '>
        <div className="containers">
          <Heading title={"Stunning Case Studies"}/>
          <Text title={"Create an optimal visual experience for your users with these inspiring layouts."}/>
         
         <div className='flex flex-wrap gap-[20px] items-center pt-[60px]'>
          <Card srcImg={sCase1} text={"Case Study Single - Web"} wImg={600}/>
          <Card srcImg={sCase2} text={"Case Study Single - Mobile"} wImg={600}/>
         </div>

        </div>
    </section>
  )
}

export default CaseSttudies