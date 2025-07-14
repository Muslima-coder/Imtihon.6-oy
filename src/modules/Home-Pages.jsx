import { Card1, Card2, Card3, Card4 } from '../assets/images'
import Card from '../components/Card'

const HomePages = () => {
  return (
    <section className='pt-[120px] pb-[39px]'>
        <div className="containers">
        <h2 className='mb-[10px] font-normal text-[40px] leading-[56px] text-[#242F65] text-center'>Professional Home Pages</h2>
        <p className='font-normal text-[20px] leading-[30px] text-[#525665] text-center'>Attractive and stylish home layouts bring your portfolio website to the next level.</p>
         
         <div className='flex flex-wrap gap-[20px] items-center pt-[60px]'>
          <Card srcImg={Card1} text={"About Me"} wImg={600}/>
          <Card srcImg={Card2} text={"Blog"} wImg={600}/>
          <Card srcImg={Card3} text={"Blog Single"} wImg={600}/>
          <Card srcImg={Card4} text={"Contact Us"} wImg={600}/>
         </div>

        </div>
    </section>
  )
}

export default HomePages