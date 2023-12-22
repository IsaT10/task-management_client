import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';
import { FaHome, FaTasks } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate('/');
    toast.success('Successfully logged out');
  };
  return (
    <div className="drawer lg:drawer-open sticky top-0 bottom-0 z-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-screen w-max bg-primaryColor  flex flex-col items-start justify-start">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" border-b-2 border-stone-100 text-stone-100 p-4 drawer-button lg:hidden"
        >
          <GiHamburgerMenu size={20} />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu w-[210px] z-50 sm:w-[250px] md:w-[280px]  md:px-6 gap-6 min-h-full  bg-primaryColor text-base-content">
          <h1 className='className="flex text-xl md:text-2xl text-stone-100  font-bold  gap-2 md:gap-2 lg:gap-5 items-center self-center text-center"'>
            OrganizeHub
          </h1>

          <div className="divide-y-2 divide-stone-100 flex flex-col mt-10">
            <span className="py-4">
              <NavLink
                to="/dashboard/taskManage"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-blue font-semibold text-primaryColor bg-stone-100 px-6 rounded-md py-1.5 text-lg text-center flex items-center gap-2'
                    : 'text-blue font-semibold text-stone-100 px-6 rounded-md py-1.5 text-lg text-center flex items-center gap-2'
                }
              >
                <MdDashboard />
                <span>Task Manage</span>
              </NavLink>
            </span>
            <span className="py-4">
              <NavLink
                to="/dashboard/alltask"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-blue font-semibold text-primaryColor bg-stone-100 px-6 rounded-md py-1.5 text-lg text-center flex items-center gap-2'
                    : 'text-blue font-semibold text-stone-100 px-6 rounded-md py-1.5 text-lg text-center flex items-center gap-2 hover:bg-stone-100 hover:text-primaryColor duration-300'
                }
              >
                <FaTasks />
                <span>All Task</span>
              </NavLink>
            </span>
            <span className="py-4">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? ''
                    : ' text-blue font-semibold text-stone-100 border-stone-100 px-6 rounded-md  text-lg text-center flex items-center gap-2 hover:bg-stone-100 hover:text-primaryColor duration-300 py-1.5'
                }
              >
                <FaHome />
                <span>Home</span>
              </NavLink>
            </span>
          </div>

          <div className="mt-auto flex gap-3 items-center ">
            <img
              className="w-10 md:w-12 object-cover h-10 md:h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p className=" md:text-lg font-semibold text-white">
              {user?.displayName}
            </p>

            <div className="tooltip  tooltip-top ml-auto" data-tip="Logout">
              <RiLogoutBoxRLine
                onClick={handleLogout}
                size={20}
                className="text-stone-100 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
