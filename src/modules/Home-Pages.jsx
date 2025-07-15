import { Card1, Card2, Card3, Card4 } from '../assets/images'
import { Card, Heading, Text } from '../components'

const HomePages = () => {
  return (
    <section className='pt-[30px] sm:pt-[120px] pb-[39px]'>
        <div className="containers">
        <Heading title={"Professional Home Pages"}/>
        <Text title={"Attractive and stylish home layouts bring your portfolio website to the next level."}/>
         
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