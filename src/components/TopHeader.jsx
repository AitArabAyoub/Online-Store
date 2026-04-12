import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom'
function TopHeader() {
    return (
        <header className='container p-3 flex justify-between items-center'>
            <Link to="/" className='text-2xl text-[#0090f0]'>Online Store</Link>
            <form className="flex justify-between items-center border rounded-2xl overflow-hidden ">
                <input type="text" name="" id=""  className="w-125"/>
                <button className="bg-[#0090f0] p-3"><FaSearch className="text-white"/></button>
            </form>
            <div>
                <Link className="relative"><TiShoppingCart className="w-8 h-8" /> <span className="absolute -top-3 -right-3 bg-[#0090f0] text-white w-6 h-6 rounded-full p-1 flex justify-center items-center">0</span></Link>
            </div>
        </header>
    )
}

export default TopHeader