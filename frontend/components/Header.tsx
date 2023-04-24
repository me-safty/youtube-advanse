import Link from "next/link"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <div className="px-5 py-8">
      <div className="container flex">
        <Link href={"/"}>p</Link>
        <SearchBar />
      </div>
    </div>
  )
}

export default Header
