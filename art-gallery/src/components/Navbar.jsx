import { Link } from "react-router-dom";

function Navbar ({cart}) {
    const totalItems = cart.reduce ((sum, item) => sum + item.qty, 0)
}