import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductsList from "@/components/ProductsList";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";
const getProduct = async (id) => {
  const req = await fetch(`https://dummyjson.com/products/${id}`);
  return req.json();
};
function Product() {
  const { prodId } = useParams();
  const dispatch = useDispatch()
  const { data, isLoading, error } = useQuery({
    queryKey: ["prod", prodId],
    queryFn: () => getProduct(prodId),
  });
  if (isLoading) return <h2>Loading</h2>;
  if (error) return <h2>{error.message}</h2>;
  return (
    <div className="container ">
      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="col-span-2">
          <Carousel className="relative">
            <CarouselContent>
              {data.images.map((el, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <img src={el} alt="" className="h-100" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0" />
            <CarouselNext className="absolute right-0" />
          </Carousel>
        </div>
        <div className="col-span-2 flex flex-col justify-center ">
          <h1 className="text-3xl">{data.title}</h1>
          <p className="text-2xl text-black! my-3">${data.price}</p>
          <p className="text-black!">
            Availibilty :{" "}
            <span className="badge-blue">{data.availabilityStatus}</span>
          </p>
          <p className="text-black! my-3">
            Brand : <span className="badge-blue">{data.brand}</span>
          </p>
          <p className="my-3">{data.description}</p>
          <h3 className="text-xl font-bold my-3">
            Hurry Up! Only {data.stock} products left in stock.
          </h3>
          <button onClick={()=>{dispatch(addItem({id:data.id,img:data.thumbnail,title:data.title,price:data.price}))}} className="btn-blue flex items-center cursor-pointer transition-all duration-300 hover:scale-110">
            Add To Cart
            <TiShoppingCart size={28} />
          </button>
        </div>
      </div>

      <div className="">
        <ProductsList slug={data.category} />
      </div>
    </div>
  );
}

export default Product;
