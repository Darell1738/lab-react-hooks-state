import { useState } from 'react';
import './App.css';

import Filter from './components/Filter';
import ItemList from './components/ItemList';

// Items must include Apple (id 1) and Milk (id 2) for tests
const initialItems = [
  { id: 1, name: 'Apple', category: 'Fruits' },
  { id: 2, name: 'Milk', category: 'Dairy' },
  { id: 3, name: 'Pomegranate', category: 'Fruits' },
  { id: 4, name: 'Lettuce', category: 'Produce' },
  { id: 5, name: 'String Cheese', category: 'Dairy' },
  { id: 6, name: 'Cookies', category: 'Dessert' },
  { id: 7, name: 'Ricotta Cheese', category: 'Dairy' },
  { id: 8, name: 'Granola Bars', category: 'Dessert' },
  { id: 9, name: 'Oranges', category: 'Fruits' },
  { id: 10, name: 'Shrimp', category: 'Seafood' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const addToCart = (itemId) => {
    if (!cartItems.includes(itemId)) {
      setCartItems([...cartItems, itemId]);
    }
  };

  const filteredItems = selectedCategory === 'All'
    ? initialItems
    : initialItems.filter(item => item.category === selectedCategory);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <h1>Shopping App</h1>

      {/* Button text MUST contain "toggle" - test looks for /toggle/i */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      </button>

      <Filter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      <ItemList items={filteredItems} cartItems={cartItems} onAddToCart={addToCart} />
    </div>
  );
}

export default App;