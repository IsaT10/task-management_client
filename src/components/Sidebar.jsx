import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content h-screen w-max bg-primaryColor  flex flex-col items-start justify-start">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" border-b-2 border-stone-100 text-stone-100 p-4 drawer-button md:hidden"
        >
          <GiHamburgerMenu size={20} />
        </label>
      </div>

      {/* <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-1/2 md:w-max min-h-full bg-base-200 text-base-content">
          <p>
            <a>Sidebar Item 1</a>
          </p>
          <p>
            <a>Sidebar Item 2</a>
          </p>
        </div>
      </div> */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu w-[210px] sm:w-[250px] md:w-[280px]  px-6 gap-6 min-h-full  bg-primaryColor text-base-content">
          <h1 className='className="flex text-xl md:text-2xl text-stone-100  font-bold  gap-2 md:gap-2 lg:gap-5 items-center self-center text-center"'>
            OrganizeHub
          </h1>

          <div className="divide-y-2 divide-stone-100 flex flex-col mt-10">
            <span className="py-6">
              <NavLink
                to="/dashboard/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-blue font-semibold text-primaryColor bg-stone-100 px-6 rounded-md py-1.5 text-lg text-center flex items-center gap-2'
                    : ' hover:text-blue duration-100 tracking-tight font-semibold  '
                }
              >
                <MdDashboard />
                <span>Dashboard</span>
              </NavLink>
            </span>
            <span className="py-6">
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
                <MdDashboard />
                <span>Home</span>
              </NavLink>
            </span>
          </div>

          <div className="mt-auto flex gap-3 items-center ">
            <img
              className="w-12 object-cover h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p className="text-lg font-semibold text-white">
              {user?.displayName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
