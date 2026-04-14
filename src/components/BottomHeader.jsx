import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, NavLink } from "react-router-dom";
const getCategories = async () => {
  const req = await fetch("https://dummyjson.com/products/categories");
  const res = await req.json();
  return res;
};

function BottomHeader() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cats"],
    queryFn: getCategories,
  });
  if (isLoading) return <h2>loading ...</h2>;
  if (error) return <h2>{error.message}</h2>;
  let links = [
    { item: "Home", url: "/" },
    { item: "About", url: "/about" },
    { item: "Contact", url: "/contact" },
  ];
  return (
    <div className="bg-[#0090f0] p-2">
      <div className="container flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white text-md">
              <TiThMenu /> Browse Categories <FaArrowDownLong />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              {data?.map((el) => (
                <DropdownMenuItem key={el.slug} >  {/* ✅ Added asChild */}
                  <Link to={`/category/${el.slug}`} className="block w-full">
                    {el.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center justify-center text-white gap-5 flex-1">
          {links.map((el) => (
            <NavLink to={el.url}>{el.item}</NavLink>
          ))}
        </div>
        <div>
          <FaUserPlus className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
