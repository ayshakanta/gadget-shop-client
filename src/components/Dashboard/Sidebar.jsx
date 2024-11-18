import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 border-r-2 border-gray-600 min-h-screen px-2 lg:px-8 py-16">
      <h1 className="text-xl lg:text-2xl pb-6 font-bold">Gadget Shop</h1>
      <ul className="space-y-3 w-full">
        <li className="btn w-full">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>
        <li className="btn w-full">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <AiOutlineProduct />
            <p>My Products</p>
          </NavLink>
        </li>
        <li className="btn w-full">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <IoAddCircleOutline />
            <p>Add Products</p>
          </NavLink>
        </li>
        <li className="btn w-full">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <IoHomeOutline />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="btn w-full">
          <NavLink to="/dashboard/overview" className="flex items-center gap-2">
            <TbLogout2 />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
