import { FREEBIE_SYMBOL, FREEBIE_WORD } from "../utils/currency";
import SubscribeForm from "../components/SubscribeForm";

function Checkout ({cart, increaseQty, decreaseQty, setCart}) {

const totalPrice = cart.reduce((sum, item)=> sum + item.price * item.qty,0);

const clearCart= () => {
    setCart([]);
};

const handleDownload = () => {
alert("Download feature coming soon!");
};

    return (
        <div>
            <h1>
                Checkout
            </h1>
            
            {cart.length === 0 ?(
                <p>
                    Your bag is empty. Add some art why don'tcha?
                </p>
             ) : (
                <>
                <div>
                    {cart.map((art) => (
                <div 
                key={art.id}
                > 
                <img
                src={art.image}
                alt={art.title}
                 />
                
            <div>
                <h2>
                    {art.title}
                    </h2>
                <p> {art.artist}</p>
            
            <p>
                {art.price}{FREEBIE_SYMBOL} * {art.qty}
            </p>

            <div>
                <button onClick={()=> decreaseQty(art.id)}
                >
                    -
                </button>
                
                <span>{art.qty}</span>

                <button
                onClick={() => increaseQty(art.id)}
                >
                    +
                </button>
            </div>
            </div>
             </div>
             ))}
        </div>
          
          {/* Clear + download buttons*/}
            <div>
                <button onClick={clearCart}
                >Clear Cart</button>
                
                <button onClick={handleDownload}
                >
                    Download Cart
                </button>
            </div>
            
            {/* Tagline & Total*/}
           <p>
                Art without limits, paid in {FREEBIE_SYMBOL}.
            </p>
            <div>
                <h2>
                    Total: {totalPrice.toFixed(0)} {FREEBIE_SYMBOL}({FREEBIE_WORD(totalPrice)})
                </h2>
            </div>
            </>
            )}
            <div>
                    <SubscribeForm />
                    </div>
             </div> 
                    
 );
}
export default Checkout;