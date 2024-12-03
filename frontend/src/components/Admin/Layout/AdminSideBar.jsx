import React from "react";
import { FaTachometerAlt, FaShoppingCart, FaBoxOpen, FaUsers, FaBox, FaCalendarAlt, FaRegMoneyBillAlt, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* item trên thanh menu admin */}
      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <FaTachometerAlt
            size={30}
            color={`${active === 1 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin-orders" className="w-full flex items-center">
          <FaShoppingCart
            size={30}
            color={`${active === 2 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin-sellers" className="w-full flex items-center">
          <FaUsers
            size={30}
            color={`${active === 3 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Sellers
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin-users" className="w-full flex items-center">
          <FaBox
            size={30}
            color={`${active === 4 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Users
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin-products" className="w-full flex items-center">
          <FaBoxOpen
            size={30}
            color={`${active === 5 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin-events" className="w-full flex items-center">
          <FaCalendarAlt
            size={30}
            color={`${active === 6 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/admin-withdraw-request" className="w-full flex items-center">
          <FaRegMoneyBillAlt
            size={30}
            color={`${active === 7 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Withdraw Request
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/profile" className="w-full flex items-center">
          <FaCog
            size={30}
            color={`${active === 8 ? "#DC2626" : "#6B7280"}`}
            className="group-hover:text-red-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-red-600" : "text-gray-700"
            } group-hover:text-red-600 transition-all duration-300 ease-in-out`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
