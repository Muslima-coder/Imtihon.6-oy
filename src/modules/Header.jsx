import {Logo} from"../assets/images/index"
import NavLink from "../components/NavLink"

const Header = () => {
const navList = ["Home", "About me", "Pages", "Contact us"]
  return (
    <header className=" py-[57px]">
        <div className="containers flex justify-between items-center">
           <a href="#"> <img src={Logo} alt="logo" /></a>
            <div>
               <nav className="flex gap-[40px] items-center">
               {navList.map((item, index) => <NavLink key={index} title={item}/>)}
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header