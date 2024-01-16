"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getCartTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../../redux/ItemSlice";
import Image from "next/image";
import Link from "next/link";
import transition from '../../transition/transition'
const page = () => {
  const [data, setData] = useState();
  // console.log("key data", data);
  const { cartItems, cartTotalQuantity, cartTotalPrice } = useSelector(
    (state) => state.counter
  );
console.log('cartssss',cartItems);
  // cartItems = JSON.parse(localStorage.getItem("all-data"))
  //   ? JSON.parse(localStorage.getItem("all-data"))
  //   : cartItems;
  // console.log("quantity", cartTotalQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    // cartItems.length>=1?JSON.parse(localStorage.getItem("all-data")): localStorage.setItem("all-data", JSON.stringify(cartItems));
    dispatch(getCartTotal());
  }, [cartItems]);

  // useEffect(() => {
  //   setData(JSON.parse(localStorage.getItem("all-data")));
  //   dispatch(getCartTotal());
  // }, [cartItems]);

  // useEffect(() => {

  //   console.log("items use", items);
  // }, []);

  return (
    <div className="w-full lg:bg-gradient-to-tr from-slate-200 via-slate-50 to-orange-100 bg-white lg:py-16 py-2 min-h-screen ">
      {cartItems.length > 0 ? <div className="container flex flex-col lg:flex-row  relative gap-12  ">
        <div className="bg-white w-full  shadow-lg rounded-lg p flex">
          <div className=" shadow-lg   w-full rounded-lg p-4 ">
            {cartItems && cartItems?.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center my-4 w-full   px-12 py-4  justify-between border rounded-2xl "
                >
                  <Image
                    src={item.img}
                    alt="img"
                    width={200}
                    height={200}
                    className="w-[300px]  h-[200px] rounded-2xl object-cover"
                  />
                  <h1 className="text-2xl">{item.name}</h1>
                  <p className="text-slate-700">{item.price}$</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="text-red-400"
                    >
                      remove
                    </button>
                    <div className="flex  items-center px-8 gap-4 bg-white shadow-2xl rounded-2xl border">
                      <button
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                        className="text-2xl"
                      >
                        +
                      </button>
                      <h1 className="">{item.amount}</h1>
                      <button
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                        className="text-2xl"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* card amount, carttotal */}
        <div className=" bg-white px-24 py-8 rounded-2xl h-[200px]">
          <h1 className="text-2xl">Total:{cartTotalPrice}$</h1>
          <h1 className=" flex text-slate-500 gap-2">
            <span>{cartTotalQuantity}: </span> Items{" "}
          </h1>
        </div>
      </div> : (
        <div className="text-center text-3xl">Your cart is empty!</div>
      )
      }

    </div>
  );
};

export default  page;
