import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
function TopHeader() {
    const {cart} = useSelector((store) => store.cart)
    const [search,setSearch] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(search.trim()){
            navigate(`/search?query=${search}`)
        }
        setSearch('')
    }
    return (
        <header className='container p-3 flex justify-between items-center'>
            <Link to="/" className='text-2xl text-[#0090f0]'>Online Store</Link>
            <form onSubmit={handleSubmit} className="flex justify-between items-center border border-black rounded-2xl overflow-hidden relative">
                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="w-125"/>
                <button className="bg-[#0090f0] p-3"><FaSearch className="text-white"/></button>
            </form>
            <div>
                <Link to="/cart" className="relative"><TiShoppingCart className="w-8 h-8" /> 
                    <span className="absolute -top-3 -right-3 bg-[#0090f0] text-white w-6 h-6 rounded-full p-1 flex justify-center items-center">
                        {cart.reduce((total, item) => total + 1, 0)}
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default TopHeader