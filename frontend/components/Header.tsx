"use client"
import { useState } from "react"

const Header = () => {
  const [inputValue, setValue] = useState<string>("")
  return (
    <div className="px-5 py-8">
      <div className="container">
        <div className="flex rounded-full text-white overflow-hidden">
          <input
            className="bg-[#212121] px-4 py-2 outline-none"
            type="text"
            name="search"
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="bg-[#2c2c2c] px-4 rounded-e-full">S</button>
        </div>
      </div>
    </div>
  )
}

export default Header
