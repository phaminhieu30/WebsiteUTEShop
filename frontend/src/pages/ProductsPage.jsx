import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize] = useState(12); // Số sản phẩm trên mỗi trang
  
  useEffect(() => {
    // Kiểm tra nếu allProducts đã có giá trị hợp lệ
    if (!allProducts) return;

    // Logic để lọc sản phẩm theo category
    if (categoryData === null) {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pagedData = allProducts.slice(startIndex, endIndex);
      setData(pagedData);
    } else {
      const filteredProducts = allProducts.filter((i) => i.category === categoryData);
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pagedData = filteredProducts.slice(startIndex, endIndex);
      setData(pagedData);
    }
  }, [allProducts, currentPage, categoryData, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Đảm bảo rằng allProducts không phải là null hoặc undefined
  const totalProducts = allProducts ? (categoryData === null ? allProducts.length : allProducts.filter((i) => i.category === categoryData).length) : 0;
  const totalPages = totalProducts ? Math.ceil(totalProducts / pageSize) : 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          <br />
          <br />
          <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
              {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
            </div>
            {data && data.length === 0 ? (
              <h1 className="text-center w-full pb-[100px] text-[20px]">No products Found!</h1>
            ) : null}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="bg-white py-10 text-center">
              <div className="inline-flex gap-1 rounded-full border border-stroke p-3">
                <ul className="flex items-center gap-1">
                  {/* Previous Button */}
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-white transform hover:scale-125 transition-all disabled:opacity-30"
                    >
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 9.8125H4.15625L9.46875 4.40625C9.75 4.125 9.75 3.6875 9.46875 3.40625C9.1875 3.125 8.75 3.125 8.46875 3.40625L2 9.96875C1.71875 10.25 1.71875 10.6875 2 10.9688L8.46875 17.5312C8.59375 17.6562 8.78125 17.75 8.96875 17.75C9.15625 17.75 9.3125 17.6875 9.46875 17.5625C9.75 17.2812 9.75 16.8438 9.46875 16.5625L4.1875 11.2188H17.5C17.875 11.2188 18.1875 10.9062 18.1875 10.5312C18.1875 10.125 17.875 9.8125 17.5 9.8125Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </li>

                  {/* Page number buttons */}
                  {/* Page number buttons */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handlePageChange(index + 1)}  // Khi nút được nhấn, gọi hàm handlePageChange với số trang hiện tại
                        className={`flex h-10 min-w-10 items-center justify-center rounded-full px-4 text-dark 
                  ${currentPage === index + 1 ? 'bg-[#1877F2] text-white hover:bg-[#1877F2]' : 'transform hover:scale-125 transition-all'}`}
                      >
                        {index + 1}  {/* Hiển thị số trang */}
                      </button>
                    </li>
                  ))}


                  {/* Next Button */}
                  <li>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-white transform hover:scale-125 transition-all disabled:opacity-30"
                    >
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 10L11.5312 3.4375C11.25 3.15625 10.8125 3.15625 10.5312 3.4375C10.25 3.71875 10.25 4.15625 10.5312 4.4375L15.7812 9.78125H2.5C2.125 9.78125 1.8125 10.0937 1.8125 10.4688C1.8125 10.8438 2.125 11.1875 2.5 11.1875H15.8437L10.5312 16.5938C10.25 16.875 10.25 17.3125 10.5312 17.5938C10.6562 17.7188 10.8437 17.7812 11.0312 17.7812C11.2187 17.7812 11.4062 17.7188 11.5312 17.5625L18 11C18.2812 10.7187 18.2812 10.2812 18 10Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <Footer />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
