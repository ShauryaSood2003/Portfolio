import { NavLink } from "react-router-dom";

const Nav=()=>{
    return(
        <header className="header">
            <NavLink to="/" className="bg-white w-10 h-10 px-5 py-5 flex items-center justify-center shadow-md rounded-lg ">
                <p className="blue-gradient_text">SH</p>
            </NavLink>
            <nav className="text-lg gap-7 flex font-medium ">
                <NavLink to="/project" className={({isActive})=>isActive?"text-blue-500":"text-black"}>
                    Projects
                </NavLink>
                
                <NavLink to="/about" className={({isActive})=>isActive?"text-blue-500":"text-black"}>
                    About
                </NavLink>
            </nav>
        </header>
    );
}
export default Nav;