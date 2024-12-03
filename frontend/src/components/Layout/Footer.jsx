import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">


        {/* Sinh viên 1 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 1</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Nguyễn Thành Châu</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 16/07/2003</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110816</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0899897394</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110816@student.hcmute.edu.vn</li>
        </ul>

        {/* Sinh viên 2 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 2</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Phạm Minh Hiếu</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 30/03/2003</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110180</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0364650933</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110180@student.hcmute.edu.vn</li>
        </ul>

        {/* Sinh viên 3 */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Sinh viên 3</h1>
          <li className="text-gray-400 text-sm leading-6">Tên: Nguyễn Minh Luân</li>
          <li className="text-gray-400 text-sm leading-6">Ngày sinh: 15/10/2003</li>
          <li className="text-gray-400 text-sm leading-6">Mã sinh viên: 21110235</li>
          <li className="text-gray-400 text-sm leading-6">Số điện thoại: 0568098880</li>
          <li className="text-gray-400 text-sm leading-6">Email: 21110235@student.hcmute.edu.vn</li>
        </ul>

      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Group 11. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
