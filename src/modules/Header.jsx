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

        <div className="relative z-[20]">
          <nav className="hidden sm:flex gap-[40px] items-center">
            {navList.map((item, index) => (
              <NavLink key={index} title={item} />
            ))}
          </nav>

          {!isOpen && (
            <button
              className="sm:hidden flex"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/*  Menu btn */}
      {isOpen && (
        <div className="absolute top-full right-4 bg-white shadow-md rounded-md flex flex-col gap-[20px] p-4 sm:hidden z-[10] w-[200px]">
          <button
            className="self-end"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
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
