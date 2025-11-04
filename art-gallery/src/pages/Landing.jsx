import {useNavigate} from "react-router-dom";

function Landing() {
 const navigate=useNavigate();


 const enterGallery= () => {
    setTimeout(() => {
navigate("/Home");
    }, 500);
    
 };
  return (
 <div>
  <h1>
    Anything Goes Art 
  </h1>
  <p>
    Curating galleries where <span>Anything goes</span>
  </p>
  <button onClick={enterGallery}> Enter Gallery </button>
 </div>
  );
}

export default Landing;