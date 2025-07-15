import { supportive1, supportive2, supportive3, supportive4 } from '../assets/images'
import { Card, Heading, Text } from '../components'

const Supportive = () => {
  return (
    <section className='pt-[120px] pb-[39px]'>
        <div className="containers">
          <Heading title={"Supportive Pages"}/>
          <Text title={"Feel the feature of creativity with these inner page layouts that perfectly match your site."}/>
         
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