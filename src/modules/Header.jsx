import { useState } from "react"
import { Logo } from "../assets/images/index"
import NavLink from "../components/NavLink"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navList = ["Home", "About me", "Pages", "Contact us"]

  return (
    <header className="py-[57px] relative">
      <div className="containers flex justify-between items-center">
        <a href="#">
          <img className="sm:w-[176px] sm:h-[41px] w-[100px] h-[30px]"  src={Logo}  alt="logo" />
        </a>

        <div className="relative z-[20]">
          <nav className="hidden sm:flex gap-[40px] items-center">
            {navList.map((item, index) => (
              <NavLink key={index} title={item} />
            ))}
          </nav>

          {!isOpen && (
            <button  className="sm:hidden flex"  onClick={() => setIsOpen(true)}  aria-label="Open Menu" >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/*  Menu btn */}
      {isOpen && (
        <div className="absolute top-2 right-4 bg-slate-200 shadow-md rounded-md flex flex-col gap-[20px] p-4 sm:hidden z-[1000] w-[200px]">
          <button className="self-end" onClick={() => setIsOpen(false)} aria-label="Close Menu" >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
          </button>

          {navList.map((item, index) => (
            <NavLink key={index} title={item} />
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
