"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
  const router = useRouter()
  const [inputValue, setValue] = useState<string>("")

  return (
    <div className="flex rounded-full text-white overflow-hidden">
      <input
        className="bg-[#212121] px-4 py-2 outline-none"
        type="text"
        name="search"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
      />
      <button
        className="bg-[#2c2c2c] px-4 rounded-e-full"
        onClick={() => router.push(`/search/${inputValue}`)}
      >
        S
      </button>
    </div>
  )
}

export default SearchBar