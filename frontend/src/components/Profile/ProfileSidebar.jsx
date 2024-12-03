import React from "react";
import { FaUser, FaShoppingCart, FaRegMoneyBillAlt, FaRegComment, FaBoxOpen, FaKey, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(1)}
      >
        <FaUser size={20} color={active === 1 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 1 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Profile
        </span>
      </div>
      
      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(2)}
      >
        <FaShoppingCart size={20} color={active === 2 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 2 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Orders
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(3)}
      >
        <FaRegMoneyBillAlt size={20} color={active === 3 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 3 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Refunds
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <FaRegComment size={20} color={active === 4 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 4 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Inbox
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(5)}
      >
        <FaBoxOpen size={20} color={active === 5 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 5 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Track Order
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(6)}
      >
        <FaKey size={20} color={active === 6 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 6 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Change Password
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={() => setActive(7)}
      >
        <FaMapMarkerAlt size={20} color={active === 7 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 7 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Address
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings size={20} color={active === 8 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
            <span className={`pl-3 ${active === 8 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}

      <div
        className="flex items-center cursor-pointer w-full mb-8 group hover:bg-blue-100 transition-all duration-300 ease-in-out"
        onClick={logoutHandler}
      >
        <FaSignOutAlt size={20} color={active === 9 ? "blue" : "#6B7280"} className="group-hover:text-blue-600" />
        <span className={`pl-3 ${active === 9 ? "text-blue-600" : ""} 800px:block hidden group-hover:text-blue-600`}>
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
