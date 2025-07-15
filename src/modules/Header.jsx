import { useState } from "react"
import { Logo } from "../assets/images/index"
import NavLink from "../components/NavLink"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navList = ["Home", "About me", "Pages", "Contact us"]

  return (
   <header className="py-[57px] relative">
  <div className="containers flex justify-around sm:justify-between items-center">
    <a href="#">
      <img
        className="sm:w-[176px] sm:h-[41px] w-[100px] h-[30px]"
        src={Logo}
        alt="logo"
      />
    </a>

    <div className="relative z-[999]">
      <nav className="hidden sm:flex gap-[40px] items-center">
        {navList.map((item, index) => (
          <NavLink key={index} title={item} />
        ))}
      </nav>

      <button className="sm:hidden flex" onClick={() => setIsOpen(!isOpen)}>
        {/* icon */}
      </button>
    </div>
  </div>

  {/* menu endi container tashqarisida */}
  {isOpen && (
    <div className="absolute right-4 top-full bg-white shadow-md rounded-md flex flex-col gap-[20px] p-4 sm:hidden z-[9999] w-[200px]">
      {navList.map((item, index) => (
        <NavLink key={index} title={item} />
      ))}
    </div>
  )}
</header>

  )
}

export default Header
