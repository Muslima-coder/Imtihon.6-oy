import { supportive1, supportive2, supportive3, supportive4 } from '../assets/images'
import Card from '../components/Card'

const Supportive = () => {
  return (
    <section className='pt-[120px] pb-[39px]'>
        <div className="containers">
        <h2 className='mb-[10px] font-normal text-[40px] leading-[56px] text-[#242F65] text-center'>Supportive Pages</h2>
        <p className='font-normal text-[20px] leading-[30px] text-[#525665] text-center'>Feel the feature of creativity with these inner page layouts that perfectly match your site.</p>
         
         <div className='flex flex-wrap gap-[20px] items-center pt-[60px]'>
          <Card srcImg={supportive1} text={"About Me"} wImg={600}/>
          <Card srcImg={supportive2} text={"Blog"} wImg={600}/>
          <Card srcImg={supportive3} text={"Blog Single"} wImg={600}/>
          <Card srcImg={supportive4} text={"Contact Us"} wImg={600}/>
         </div>

        </div>
    </section>
  )
}

export default Supportive