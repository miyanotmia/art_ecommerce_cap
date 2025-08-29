import { Link, useLocation } from "react-router-dom";

function Navbar ({cart}) {
    const location = useLocation();

    {/*Hide nav */}
    if (location.pathname ==="/") {
        return null;
    }
    
    
    const totalItems = cart.reduce ((sum, item) => sum + item.qty, 0)
return(
    <nav className="fixed top- 0 left-0 right-0 z-50 bg-[#2C2C2C] text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">
            <Link to="/">Anything Goes Art </Link>
        </h1>
       
       
        <div className="flex space-x-6 items-center">
            <Link to="/home" className="hover:text-gray-300">Cart {totalItems > 0 && (<span className="absolute-top-2 -right-3 bg-red-500 text-xs round-full px-2 py-1">
                {totalItems}
            </span>
            )}
            </Link>
        </div>
    </nav>
);
}

export default Navbar;