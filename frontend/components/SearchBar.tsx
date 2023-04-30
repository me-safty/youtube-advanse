"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SearchBar = () => {
	const router = useRouter()
	const [inputValue, setValue] = useState<string>("")

	return (
		<div className="flex rounded-full text-white overflow-hidden">
			<input
				className="bg-[#121212] px-4 py-2 outline-none w-[55vw]"
				type="password"
				name="search"
				value={inputValue}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search..."
			/>
			<button
				className="bg-[#313131] px-[10px] rounded-e-full"
				onClick={() => router.push(`/search/${inputValue}`)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					data-tags="search"
				>
					<g fill="#fff" transform="scale(0.03125 0.03125)">
						<path d="M621.668 653.668c-44.476 31.692-98.895 50.332-157.668 50.332-150.221 0-272-121.779-272-272s121.779-272 272-272c150.221 0 272 121.779 272 272 0 75.111-30.445 143.111-79.667 192.333l191.916 191.916c8.802 8.802 8.588 22.915-0.249 31.751-8.898 8.898-23.052 8.948-31.751 0.249l-194.581-194.581zM464 672c132.548 0 240-107.452 240-240s-107.452-240-240-240c-132.548 0-240 107.452-240 240s107.452 240 240 240v0z" />
					</g>
				</svg>
			</button>
		</div>
	)
}

export default SearchBar
