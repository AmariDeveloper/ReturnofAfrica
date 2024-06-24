import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { CgMenuRight } from "react-icons/cg";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext)

  return (
    <header>
             <div className="inner-row">
                        <div className="header-content">
                                   <Link to={'/'} className="logo">
                                            <img src={logo} alt="" />
                                   </Link>

                                   <nav>
                                            <ul>
                                                      <li><NavLink to={"/"}>Home</NavLink></li>
                                                      <li><NavLink to={'/yora-summit'}>Yora Summit</NavLink></li>
                                                      <li><NavLink to={'/masterclasses'}>Masterclasses</NavLink></li>
                                            </ul>
                                   </nav>

                                   <div className="header-action">
                                            <Link to={'/registration'}>Register</Link>

                                            <span  onClick={() => setSidebarStatus(true)} className="menu-btn"><CgMenuRight /></span>
                                   </div>
                        </div>
             </div>
    </header>
  )
}

export default Header