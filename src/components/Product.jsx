import React from "react";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
function Product({ el }) {
  return (
    <Card className="relative group overflow-hidden rounded-xl border transition duration-300 ease-in-out hover:shadow-2xl hover:border-[#0090f0]">
      <CardContent className="p-0">
        {/* Image */}
        <img
          src={el.thumbnail}
          alt={el.title}
          className="w-full  object-cover"
        />
        {/* Content */}
        <div className="p-3">
          <p className="text-xl font-semibold line-clamp-1">{el.title}</p>
          <h3 className=" font-bold mt-1">${el.price}</h3>
        </div>
        <div className="absolute bottom-10 -right-12 transition-all duration-300 group-hover:right-4">
          <button
            onClick={() =>
              dispatch(
                addItem({
                  id: el.id,
                  img: el.thumbnail,
                  title: el.title,
                  price: el.price,
                }),
              )
            }
            className="bg-blue-600 text-white p-2 rounded-full shadow-lg  mb-1 cursor-pointer"
          >
            <FaCartPlus />
          </button>
          <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
            <Link to={`/products/${el.id}`}>
              <FaEye />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Product;
