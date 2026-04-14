import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import {
  removeItem,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/cartSlice";

function Cart() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="w-[50%] border border-[#d6d6d6d5] p-3 shadow-xl ">
        <div className="max-h-[500px] overflow-auto">
          <div className="p-2 border-b border-[#d6d6d6d5]">
            <h1 className="text-2xl Font-bold">Order Summary</h1>
          </div>
          <div>
            {cart.map((el) => (
              <div className="border-b border-[#d6d6d6d5] p-2  flex justify-between items-center gap-5">
                <img src={el.img} alt="" className="w-30 h-30" />
                <div className="flex-1">
                  <h6>{el.title}</h6>
                  <p>${el.price}</p>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => {
                        dispatch(increaseQuantity(el.id));
                      }}
                      className="bg-gray-300 p-1 rounded-md cursor-pointer"
                    >
                      +
                    </button>
                    <span>{el.quantity}</span>
                    <button
                      onClick={() => {
                        dispatch(decreaseQuantity(el.id));
                      }}
                      className="bg-gray-300 p-1 rounded-md cursor-pointer"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      dispatch(removeItem(el.id));
                    }}
                    className="text-red-500 cursor-pointer"
                  >
                    <FaTrashAlt size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 border  border-[#d6d6d6d5]  flex justify-between items-center">
          <span>Total :</span>
          <h6 className="text-2xl font-bold">
            $
            {cart.reduce(
              (total, item) => total + item.quantity * Number(item.price),
              0,
            )}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Cart;
