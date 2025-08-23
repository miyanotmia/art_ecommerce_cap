import {Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
<Routes>
  <Route path="/" element={<Landing/>} />
  <Route path="/Home" element={<Home addToCart={addToCart} />} />
  
</Routes>
  );
}
export default App;