import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <div className="lg:w-[280px] min-h-screen ">
        <Sidebar />
      </div>

      <div className="flex-1 mx-2 md:mx-0">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
