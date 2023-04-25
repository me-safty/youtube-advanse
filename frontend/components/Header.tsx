import Link from "next/link"
import SearchBar from "./SearchBar"
import Image from "next/image"

const Header = () => {
	return (
		<div className="px-5 py-3 bg-[#212121]">
			<div className="container flex items-center justify-center gap-3">
				<Link href={"/"}>
					<Image
						src={"https://i.ibb.co/s9Qys2j/logo.png"}
						alt="logo"
						width={50}
						height={50}
						className="w-9 h-9"
					/>
				</Link>
				<SearchBar />
			</div>
		</div>
	)
}

export default Header
