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
        <h1 className="flex text-xl md:text-2xl text-primaryColor  font-bold  gap-2 md:gap-2 lg:gap-5 items-center">
          <Link to="/">OrganizeHub</Link>
        </h1>

        <div className="dropdown ">
          <label tabIndex={0} className="btn  btn-ghost md:hidden ">
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
            className="menu menu-compact dropdown-content -left-20 mt-3 p-2   w-36 mr-10 z-40 text-stone-900 rounded-md  bg-stone-100 "
          >
            <li className="hover:bg-primaryColor focus:bg-primaryColor active:bg-primaryColor rounded-md hover:text-white font-semibold duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-primaryColor focus:bg-primaryColor active:bg-primaryColor rounded-md hover:text-white font-semibold duration-200">
              <Link to="/dashboard/taskManage">Dashboard</Link>
            </li>
            <li className="hover:bg-primaryColor focus:bg-primaryColor active:bg-primaryColor rounded-md hover:text-white font-semibold duration-200">
              <Link to="/about">About</Link>
            </li>
            {user?.email ? (
              <li className="hover:bg-primaryColor focus:bg-primaryColor active:bg-primaryColor rounded-md hover:text-white font-semibold duration-200">
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="hover:bg-primaryColor focus:bg-primaryColor active:bg-primaryColor rounded-md hover:text-white font-semibold duration-200">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className=" hidden md:flex relative">
        <ul className="flex gap-4 items-center -mr-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-primaryColor    tracking-tight   font-semibold   '
                  : '  hover:text-primaryColor duration-100   tracking-tight font-semibold   '
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/taskManage"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-primaryColor    tracking-tight   font-semibold '
                  : ' hover:text-primaryColor duration-100   tracking-tight font-semibold  '
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-primaryColor     tracking-tight  font-semibold   '
                  : ' hover:text-primaryColor duration-100   tracking-tight font-semibold  '
              }
            >
              About
            </NavLink>
          </li>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-10">
                <img
                  src={user?.photoURL}
                  className="w-10 h-10 object-cover rounded-full"
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu px-4 py-2 bg-stone-100 mt-4 rounded-md w-max"
              >
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-primaryColor hover:text-stone-100 font-semibold "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-primaryColor   tracking-tight   font-semibold '
                    : '  hover:text-primaryColor duration-100   tracking-tight font-semibold   '
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
