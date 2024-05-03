import React, { useState, useEffect } from 'react';
import ProductList from './Productlist';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      // Извлекаем массив products из данных API
      const productsData = data.products;
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = (productToDelete) => {
    setProducts(products.filter((product) => product !== productToDelete));
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header>
        <h1>Магазик у тамазика</h1>
        <button onClick={scrollToFooter}>Scroll to Footer</button>
      </header>
      <main>
        <ProductList products={products} onDelete={deleteProduct} />
      </main>
      <footer>
        <p>© 2024 магазин палёных айфонов. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
