"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
	const router = useRouter()
	const [inputValue, setValue] = useState<string>("")

	return (
		<div className="flex rounded-full text-white overflow-hidden">
			<input
				className="bg-[#121212] px-4 py-2 outline-none"
				type="password"
				name="search"
				value={inputValue}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search..."
			/>
			<button
				className="bg-[#313131] px-4 rounded-e-full"
				onClick={() => router.push(`/search/${inputValue}`)}
			>
				S
			</button>
		</div>
	)
}

export default SearchBar
