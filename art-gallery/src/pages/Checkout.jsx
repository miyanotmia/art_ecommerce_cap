import { FREEBIE_SYMBOL, FREEBIE_WORD } from "../utils/currency";

function Checkout ({cart, increaseQty, decreaseQty}) {

const totalPrice = cart.reduce((sum, item)=> sum + item.price * item.qty,0);

    return (
        <div className="min-h-screen bg-orange-50 p-8 pt-24">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                Checkout
            </h1>
            
            {cart.length === 0 ?(
                <p className="text-center text-gray-600">
                    Your bag is empty. Add some art why don'tcha?
                </p>
             ) : (
                <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cart.map((art) => (
                <div 
                key={art.id}
                className="bg-[#F7F6F3] rounded-lg shadow-md overflow-hidden"> 
                <img
                src={art.image}
                alt={art.title}
                className="w-full h-48 object-cover" />
                
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    {art.title}
                    </h2>
                <p className="text-gray-600"> {art.artist}</p>
            
            <p className="text-gray-800 font-medium">
                {art.price}{FREEBIE_SYMBOL} * {art.qty}
            </p>

            <div className="flex items-center space-x-2 mt-4">
                <button onClick={()=> decreaseQty(art.id)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
                    -
                </button>
                
                <span className="font-semibold">{art.qty}</span>

                <button
                onClick={() => increaseQty(art.id)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
                    +
                </button>
            </div>
            </div>
             </div>
             ))}
        </div>
          
           <p className="mt-6 text-lg italic text-gray-700 text-center">
                Art without limits, paid in {FREEBIE_SYMBOL}.
            </p>
            <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">
                    Total: {totalPrice.toFixed(0)} {FREEBIE_SYMBOL}({FREEBIE_WORD(totalPrice)})
                </h2>
            </div>
            </>
            )}
             </div>
    );
}
export default Checkout;