import { BtnIcon, CompIcon, HandIcon } from "../assets/icons/Icons"
import { HeroContent } from "../assets/images"
import { FooterText } from "../components"


const Footer = () => {
  return (
    <footer className="footer pt-[86px] pb-[3px]">
        <div className="containers">
            <img  className='mx-auto mb-3' src={HeroContent} alt="img" />
            <marquee>
            <div className=" flex items-center justify-between pb-[89px] border-b-[1px] border-b-[#D092BA] w-full">
                <div className="flex items-center gap-[10px]">
                   <HandIcon/>
                   <p className="font-normal text-[30px] leading-[45px] text-[#242F65] ">Get in Touch</p>
                </div>
                <div className="flex items-center gap-[10px]">
                   <CompIcon/>
                   <p className="font-normal text-[30px] leading-[45px] text-[#242F65] ">Available Work</p>
                </div>
                <div className="flex items-center gap-[10px]">
                   <HandIcon/>
                   <p className="font-normal text-[30px] leading-[45px] text-[#242F65] ">Get in Touch</p>
                </div>
                <div className="flex items-center gap-[10px]">
                   <CompIcon/>
                   <p className="font-normal text-[30px] leading-[45px] text-[#242F65] ">Available Work</p>
                </div>
            </div>
            </marquee>

           <div className=" flex-col flex sm:flex-row items-center justify-between pt-[129px] pb-[39px] border-b-[1px] border-b-[#D092BA] w-full">
             <div className="flex items-center gap-[26px]">
                <div>
                    <FooterText title={"UX Designer"}/>
                    <FooterText title={"UX Designer"}/>
                    <FooterText title={"Protected"}/>
                </div>
                 <div>
                    <FooterText title={"Style Guide"}/>
                    <FooterText title={"Licenses"}/>
                    <FooterText title={"Changelog"}/>
                </div>
            </div>

            <div className="sm:w-[819px] w-[400px] bg-white rounded-[20px] sm:flex-row flex-col flex items-center justify-around ">
                <p className="font-normal text-[24px] leading-[36px] p-[39px] text-[#242F65] ">Interested in working together? Drop me a line</p>
                <a className="flex px-4 items-center gap-[10px] w-[187px] rounded-[10px] bg-[#242F65] border-[2px] text-white cursor-pointer border-[#242F65] hover:bg-transparent hover:text-[#242F65] duration-300" href="#"><BtnIcon/> 
                <p className="font-normal  text-[20px] leading-[30px]  py-[10px]">Write Now</p></a>
            </div>
           </div>
           <a className="font-normal  text-[20px] leading-[30px] text-[#242F65] mt-[20px] w-full mx-auto text-center inline-block" href="#">Copyright © UIUXer | Designed by VictorFlow Templates - Powered by Webflow</a>
        </div>
    </footer>
  )
}

export default Footer