import { useState } from "react"
import NavLink from "../components/NavLink"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navList = ["Home", "About me", "Pages", "Contact us"]

  return (
    <header className="py-[57px] relative">
      <div className="containers flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>

        {!isOpen && (
          <button onClick={() => setIsOpen(true)} className="sm:hidden z-[11]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
          </button>
        )}

        {/* menu btn */}
        {isOpen && (
          <div className="absolute top-5 right-4 bg-slate-300 shadow-md rounded-md flex flex-col gap-[20px] p-4 sm:hidden z-[10] w-[200px]">
            <button onClick={() => setIsOpen(false)} className="self-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>

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
