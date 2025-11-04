import {useState, useEffect} from "react";
import { FREEBIE_SYMBOL, FREEBIE_WORD } from "../utils/currency";
import { Link } from "react-router-dom";

function Home ({addToCart, cart}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
fetch("/artworks.json")
.then((res) => res.json())
.then ((data) => setItems(data))
.catch((err) => console.error("Error loading artworks:", err));
}, []);

return (
    <div>
    <div>
        <div>
            <h1>
            Anything Goes Gallery
        </h1>      
        <Link to="/Checkout">
    Head to Checkout
    {cart.length > 0 &&(
        <span>{cart.length}
        </span>
    )}
    </Link>
    </div>
      
        <div>
            {items.map((art) => (
                <div
                key= {art.id}
                >
                    <img
                    src={art.image}
                    alt= {art.title}
                    
                    />
                    <div>
                    <h2>
                        {art.title}
                    </h2>
                    <p>
                        {art.price}{FREEBIE_SYMBOL} ({FREEBIE_WORD (art.price)})
                    </p>
                    <p>
                        {art.artist}
                    </p>
                    <button onClick={(  ) => addToCart(art)}
                    >
                          Add to cart                  
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
);
}

export default Home;