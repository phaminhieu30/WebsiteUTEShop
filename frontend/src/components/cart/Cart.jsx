import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[35%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {cart && cart.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className={`${styles.noramlFlex} p-4 pb-0`}>
                <IoBagHandleOutline size={50} />
                <h5 className="pl-2 w-full text-[20px] font-[500]">
                  {cart && cart.length} items
                </h5>

                <div className="flex w-full justify-end">
                  <RxCross1
                    size={20}
                    className="cursor-pointer"
                    onClick={() => setOpenCart(false)}
                  />
                </div>
              </div>


              <br />
              <div className="w-full border-t">
                {cart &&
                  cart.map((i, index) => (
                    <CartSingle
                      key={index}
                      data={i}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>

            <div className="px-5 mb-3">
              <div className="border-t border-gray-200 py-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{totalPrice}$</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <Link to="/checkout">
                    <div className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout Now</div> </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpenCart(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Đã hết hàng!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img alt="" src={`${data?.images[0]?.url}`} className="w-[100px] h-[100px] object-cover" />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div className="pb-5">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{data.name}</h3>
              <p className="ml-4">{totalPrice}$</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{data.discountPrice}$ * {value}</p>
          </div>
          <div className="flex flex-1 items-center justify-between text-sm">
            <div className="flex items-center justify-between w-[100px]"> {/* Set fixed width for proper spacing */}
              <div
                className="bg-[#7dc9b3] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer hover:bg-green-500"
                onClick={() => decrement(data)}
              >
                <HiOutlineMinus size={16} color="#fff"/>
              </div>

              <span>{data.qty}</span>
              
              <div
                className={`bg-[#7dc9b3] border border-[#7dc9b3] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer hover:bg-green-500`}
                onClick={() => increment(data)}
              >
                <HiPlus size={18} color="#fff" />
              </div>
            </div>

            <div className="flex">
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeFromCartHandler(data)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
