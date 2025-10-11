import { use } from "react";
import { useState } from "react";

function SubscribeForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //send to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("http://localhost:5000/api/subscribers",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ name, email}),
            });

            const data = await res.json();
            
            if (res.ok){
                setMessage(data.message || "Subscription successful");
                setName("");
                setEmail("");
            } else{
                setMessage(data.message || "Something went wrong. Try again.");
            }
         } catch (err){
                console.error("Error submitting subscriber", err);
                setMessage("Server error- please try again later.");
            };
            return (
                 <div className="max-w-md mx-auto bg-[#F7F6F3] p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Stay in the Loop 🎨
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        Subscribe to get alerts when new artworks are added.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
        />
        <button
        type="submit"
         className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition"
        >
          Subscribe
        </button>
        </form>
        {message && (<p className="mt-4 text-center text-gray-700 font-medium">{message}</p>
      )}
      </div>
            );
        }
    }

    export default SubscribeForm;