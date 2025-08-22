import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing  from "./pages/Landing";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/*" element={
          <div>
            <Navbar/><Routes><Route path="home" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path= "checkout" element={<Checkout />}/>
            </Routes>
          </div>
        }
        />
      </Routes>
    </Router>
  );
}
export default App;