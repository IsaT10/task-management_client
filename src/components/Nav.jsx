import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
const Nav = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
    navigate('/');
    toast.success('Successfully logged out');
  };
  return (
    <div className="navbar  bg-stone-100 absolute left-0 right-0 mt-6 sm:mt-10 rounded-full  max-w-5xl mx-auto px-4 py-0 sm:px-10 flex justify-between">
      <div className=" flex w-full lg:w-44 justify-between items-center">
        <div className="flex text-xl md:text-2xl text-primaryColor  font-bold  gap-2 md:gap-2 lg:gap-5 items-center">
          <Link to="/">OrganizeHub</Link>
        </div>

        <div className="dropdown ">
          <label tabIndex={0} className="btn  btn-ghost lg:hidden ">
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
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content -left-20 mt-3 p-2 shadow  w-36 mr-10 z-40 text-white rounded-md  bg-blue"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signupAsEmployee">Join as Employee</Link>
            </li>
            <li>
              <Link to="/signupAsHR">Join As HR</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" hidden lg:flex relative">
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-blue  tracking-tight font-semibold   '
                  : '  hover:text-blue duration-100 tracking-tight font-semibold   '
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assets"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-blue    '
                  : ' hover:text-blue duration-100 tracking-tight font-semibold  '
              }
            >
              My assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myTeam"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-blue    '
                  : ' hover:text-blue duration-100 tracking-tight font-semibold  '
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-blue  tracking-tight font-semibold   '
                  : '  hover:text-blue duration-100 tracking-tight font-semibold   '
              }
            >
              Login
            </NavLink>
          </li>

          {/* {userData?.image ? (
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="avatar cursor-pointer flex items-center"
                    >
                      <div className="w-10 rounded-full">
                        <img src={userData?.image} alt="" />
                      </div>
                      <div className="border-2 border-stone-500 pr-1 border-l-0 rounded-r-lg ">
                        <IoMdArrowDropdown className="text-stone-500 text-lg mt-0.5" />
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="avatar cursor-pointer flex items-center"
                    >
                      <div className="w-10 rounded-full bg-transparent">
                        <img src={avatar} alt="avatar" />
                      </div>
                      <div className="border-2 border-stone-500 pr-1 border-l-0 rounded-r-lg ">
                        <IoMdArrowDropdown className="text-stone-500 text-lg mt-0.5" />
                      </div>
                    </div>
                  )} */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
