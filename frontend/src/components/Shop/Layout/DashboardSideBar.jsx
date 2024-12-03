import React from "react";
import { FaTachometerAlt, FaShoppingCart, FaBoxOpen, FaPlusSquare, FaTags, FaCalendarCheck, FaMoneyBillWave, FaGift, FaHistory, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-white shadow-xl rounded-md overflow-y-auto sticky top-0 left-0 z-10 transition-all duration-300 ease-in-out">
      {/* single item */}
      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard" className="w-full flex items-center">
          <FaTachometerAlt
            size={30}
            color={`${active === 1 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 1 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FaShoppingCart
            size={30}
            color={`${active === 2 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 2 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FaBoxOpen
            size={30}
            color={`${active === 3 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 3 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-create-product" className="w-full flex items-center">
          <FaPlusSquare
            size={30}
            color={`${active === 4 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 4 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <FaTags
            size={30}
            color={`${active === 5 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 5 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <FaCalendarCheck
            size={30}
            color={`${active === 6 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 6 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Create Event
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-withdraw-money" className="w-full flex items-center">
          <FaMoneyBillWave
            size={30}
            color={`${active === 7 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 7 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <FaHistory
            size={30}
            color={`${active === 9 ? "#1E40AF" : "#6B7280"}`}
            className="group-hover:text-blue-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 9 ? "text-blue-600" : "text-gray-700"
            } group-hover:text-blue-600 transition-all duration-300 ease-in-out`}
          >
            Refunds
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4 group hover:bg-blue-100 transition-all duration-300 ease-in-out">
        <Link to="/settings" className="w-full flex items-center">
          <FaCogs
            size={30}
            color={`${active === 10 ? "#DC2626" : "#6B7280"}`}
            className="group-hover:text-red-600 transition-all duration-300 ease-in-out"
          />
          <h5
            className={`hidden sm:block pl-3 text-lg font-medium ${
              active === 10 ? "text-red-600" : "text-gray-700"
            } group-hover:text-red-600 transition-all duration-300 ease-in-out`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
