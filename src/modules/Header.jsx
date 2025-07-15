// import {Logo} from"../assets/images/index"
// import NavLink from "../components/NavLink"

// const Header = () => {
// const navList = ["Home", "About me", "Pages", "Contact us"]
//   return (
//     <header className=" py-[57px]">
//         <div className="containers flex justify-around sm:justify-between items-center">
//            <a href="#"> <img className="sm:w-[176px] sm:h-[41px] w-[100px] h-[30px] " src={Logo} alt="logo" /></a>
//             <div>
//                <nav className=" hidden sm:flex gap-[40px] items-center">
//                {navList.map((item, index) => <NavLink key={index} title={item}/>)}
//               </nav>
//               <button className=" sm:hidden flex">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
//                     <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
//                   </svg>
//               </button>
//             </div> 
//         </div>
//     </header>
//   )
// }

// export default Header

import { useState } from "react"
import { Logo } from "../assets/images/index"
import NavLink from "../components/NavLink"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navList = ["Home", "About me", "Pages", "Contact us"]

  return (
    <header className="py-[57px]">
      <div className="containers flex justify-around sm:justify-between items-center relative">
        <a href="#">
          <img
            className="sm:w-[176px] sm:h-[41px] w-[100px] h-[30px]"
            src={Logo}
            alt="logo"
          />
        </a>

        <div>
          <nav className="hidden sm:flex gap-[40px] items-center">
            {navList.map((item, index) => (
              <NavLink key={index} title={item} />
            ))}
          </nav>

          {/* Menu btn */}
          <button className="sm:hidden flex" onClick={() => setIsOpen(!isOpen)} >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16" >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" /> </svg>
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-[100%] h-[300px] right-0 bg-white shadow-md rounded-md flex flex-col gap-[20px] p-4 sm:hidden z-100">
            {navList.map((item, index) => (
              <NavLink key={index} title={item} />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
