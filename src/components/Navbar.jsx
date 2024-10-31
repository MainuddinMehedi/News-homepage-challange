import { Link } from "react-router-dom"
import { logo } from "../utils/img-imports"


const Navbar = () => {
  return (
    <div className="flex justify-between py-5">
        <div className="">
            <img className="cursor-pointer" src={logo} alt="" />
        </div>
        <div className="flex items-center">
            <ul className="space-x-7">
                <Link to={"/"}>Home</Link>
                <Link>New</Link>
                <Link>Popular</Link>
                <Link>Trending</Link>
                <Link>Categories</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar