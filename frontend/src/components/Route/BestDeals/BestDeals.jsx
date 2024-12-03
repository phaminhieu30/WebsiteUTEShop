import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for pagination
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstTen = sortedData?.slice(0, 10); // Get the top 10 products based on sales
    setData(firstTen);
  }, [allProducts]);

  const productsPerPage = 4; // Number of products to show per page (still 4 products)

  const nextPage = () => {
    if (currentIndex + 1 < data.length) {
      setCurrentIndex(currentIndex + 1); // Move 1 product forward
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move 1 product backward
    }
  };

  const currentProducts = data.slice(currentIndex, currentIndex + productsPerPage);

  // Check if the "Next" button should have opacity = 0 (when at the last 4 products)
  const isNextDisabled = currentIndex + productsPerPage >= data.length;
  
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className="flex justify-between items-center mb-4">
          {/* Title and pagination arrows in the same row */}
          <div className={`${styles.heading}`}>
            <h1 className="underline text-green-800 underline-offset-4">Best Deals</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Left arrow */}
            <button
              className="text-black text-2xl rounded-full "
              onClick={prevPage}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.3 : 1 }} // Adjust opacity for the "Previous" button
            >
              &#8592; {/* Left arrow */}
            </button>
            {/* Right arrow */}
            <button
              className="text-black text-2xl rounded-full"
              onClick={nextPage}
              disabled={isNextDisabled}
              style={{ opacity: isNextDisabled ? 0.3 : 1 }} // Set opacity to 0 if we're at the last 4 products
            >
              &#8594; {/* Right arrow */}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto gap-[20px] md:gap-[25px] lg:gap-[25px] mb-12">
            {currentProducts.map((product, index) => (
              <ProductCard data={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
