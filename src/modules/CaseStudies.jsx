import { sCase1, sCase2 } from '../assets/images'
import Card from '../components/Card'

const CaseSttudies = () => {
  return (
    <section className='pt-[120px] pb-[39px] bg-[#EDF0F9] '>
        <div className="containers">
        <h2 className='mb-[10px] font-normal text-[40px] leading-[56px] text-[#242F65] text-center'>Stunning Case Studies</h2>
        <p className='font-normal text-[20px] leading-[30px] text-[#525665] text-center'>Create an optimal visual experience for your users with these inspiring layouts.</p>
         
         <div className='flex flex-wrap gap-[20px] items-center pt-[60px]'>
          <Card srcImg={sCase1} text={"Case Study Single - Web"} wImg={600}/>
          <Card srcImg={sCase2} text={"Case Study Single - Mobile"} wImg={600}/>
         </div>

        </div>
    </section>
  )
}

export default CaseSttudies