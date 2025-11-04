import { Link, useLocation } from "react-router-dom";

function Navbar ({cart}) {
    const location = useLocation();

    {/*Hide nav */}
    if (location.pathname ==="/") {
        return null;
    }
    
    const totalItems = cart.reduce ((sum, item) => sum + item.qty, 0)

    return(
    
    <nav>
        <div>
        
        <h1>
            <Link to="/">Anything Goes Art </Link>
        </h1>
       
       
        <div>
            <Link to="/Home" >
            Home</Link>
            
            <Link to="/Checkout">Cart {totalItems > 0 && (<span>
                {totalItems}
            </span>
            )}
            </Link>
        </div>
        </div>
    </nav>
);
}

export default Navbar;