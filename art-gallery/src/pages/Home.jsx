import {useState, useEffect} from "react";
function Home ({addToCart, cart}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
fetch("/artworks.json")
.then((res) => res.json())
.then ((data) => setItems(data))
.catch((err) => console.error("Error loading artworks:", err));
}, []);

return (
    <div className="min-h-screen bg-amber-100 p-8">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-[#2C2C2C] mb-6 text-center">
            Anything Goes Gallery
        </h1>      
        <link to="/Checkout"
className="bg-[#2C2C2C] text-white px-4 py-2 rounded hover:bg-[#444]">
    Head to Checkout
    {cart.length > 0 &&(
        <span className="absolute -top-2 -right-2 g-red-600 text-white text-xs rounded-full px-2 py-1">{cart.length}
        </span>
    )}
    </link>
    </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((art) => (
                <div
                key= {art.id}
                className="bg-amber-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                    <img
                    src={art.image}
                    alt= {art.title}
                    className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                    <h2 className="text-lg font-semibold text-[#2C2C2C]">
                        {art.title}
                    </h2>
                    <p className="text-gray-700">
                        {art.artist}
                    </p>
                    <button onClick={(  ) => addToCart(art)}
                    className="mt-2 bg-red-950 text-white py-2 rounded">
                        Throw inna Bag
                    </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Home