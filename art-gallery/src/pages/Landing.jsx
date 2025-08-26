import {useNavigate} from "react-router-dom";

function Landing() {
 const navigate=useNavigate();


 const enterGallery= () => {
    setTimeout(() => {
navigate("/Home");
    }, 500);
    
 };
  return (
 <div 
 className={`min-h-screen bg-orange-100 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out`}
 >
  <h1 className="text-9xl font-bold text-gray-800 mb-4">
    Anything Goes Art 
  </h1>
  <p 
  className="text-2xl text-gray-600 mb-8">
    Curating a galleries where <span className="italic">Anything goes</span>
  </p>
  <button onClick={enterGallery} className="bg-[#2C2C2C] text-white px-6 py-3 rounded-lg transition-transform transform hover:bg-[#F7F6F3] hover:text-[#2C2C2C] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2c2c2c]"> Enter Gallery </button>
 </div>
  );
}

export default Landing;