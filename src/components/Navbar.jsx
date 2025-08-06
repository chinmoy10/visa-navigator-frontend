import { NavLink } from "react-router-dom";
import logo from "../assets/newlogo.png";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            `font-semibold border border-white/50 hover:text-orange-400 bg-transparent ${
              isActive ? "text-orange-400" : "text-blue-900/90"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/allVisas`}
          className={({ isActive }) =>
            `font-semibold border border-white/50 hover:text-orange-400 bg-transparent ${
              isActive ? "text-orange-400" : "text-blue-900/90"
            }`
          }
        >
          All visas
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/addVisa`}
          className={({ isActive }) =>
            `font-semibold border border-white/50 hover:text-orange-400 bg-transparent ${
              isActive ? "text-orange-400" : "text-blue-900/90"
            }`
          }
        >
          Add Visa
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myAddedVisas`}
          className={({ isActive }) =>
            `font-semibold border border-white/50 hover:text-orange-400 bg-transparent ${
              isActive ? "text-orange-400" : "text-blue-900/90"
            }`
          }
        >
          My added visas
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myVisaApplications`}
          className={({ isActive }) =>
            `font-semibold border border-white/50 hover:text-orange-400 bg-transparent ${
              isActive ? "text-orange-400" : "text-blue-900/90"
            }`
          }
        >
          My Visa applications
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-gray-500/80 py-3">
        <div className="flex md:w-8/12 mx-auto">
          <div className="navbar-start md:w-[25%]">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {NavItems}
              </ul>
            </div>
            <div className="w-[200px]">
              <img className="w-full" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center "></div>
          <div className="navbar-end md:w-[75%] gap-6">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-3">{NavItems}</ul>
            </div>

            <div className=" lg:border-l-2 border-gray-300 lg:pl-6 space-x-3">
              <a className="btn btn-link p-0 text-base text-orange-400">
                Login
              </a>
              <a className="btn btn-link p-0 text-base text-blue-800">
                Register
              </a>
            </div>
            {/* <div className="dropdown dropdown-hover dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
