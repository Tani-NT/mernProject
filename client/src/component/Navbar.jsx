import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const {isLoggedIn} = useAuth();
  return (
    <header className="w-full bg-zinc-800 text-[#667fd7]">
        <div className="container w-full h-full flex items-center justify-between pl-[3vw] py-[2vw] ">
            <div className="logo-brand text-3xl font-bold">
                <NavLink to="/">Logo</NavLink>
            </div>
            <ul className="flex gap-[3vw] text-[1.3vw] font-semibold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/service">Service</NavLink> 
                <NavLink to="/contact">Contact</NavLink>
                {isLoggedIn? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/register">Register</NavLink>}
            </ul>
        </div>
    </header>
  )
}

export default Navbar