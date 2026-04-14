import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/cartSlice";
import Product from "./Product";

export const getCatProds = async (slug) => {
    const req = await fetch(`https://dummyjson.com/products/category/${slug}`);
    const res = await req.json();
    return res;
    };

function ProductsList({ slug }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ["cat", slug],
        queryFn: () => getCatProds(slug),
    });
    const dispatch = useDispatch()
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold capitalize">{slug}</h2>
            <p className="text-gray-500">Explore top products in this category</p>
            <Carousel className="mt-5">
                <CarouselContent className="">
                    {data.products.map((el) => (
                        <CarouselItem key={el.id} className="basis-1/5">
                            <Product el={el}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default ProductsList;
