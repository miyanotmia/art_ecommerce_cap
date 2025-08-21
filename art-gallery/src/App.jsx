import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Anything Goes Art
      </h1>
      <p className="text-lg text-gray-600">
        Curating a galleries where <span className="italic">Anything goes</span>
      </p>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.title} — {p.artist}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
