import './App.css';
import MenuItem from './components/MenuItem';
import JapaneseRestaurant from './components/JapaneseRestaurant';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  const [cart, itemSet] = useState({});

  const addItem = (id, price) => {
    itemSet(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }
    ));
  };

  const removeItem = (id) => {
    itemSet(prev => {
      if (prev[id] > 1) {
        return { ...prev, [id]: prev[id] - 1 };
      } else {
        const modCart = { ...prev };
        delete modCart[id];
        return modCart;
      }
    });
  };

  const emptyCart = () => {
    itemSet({});
  };

  const total = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(id));
      return total + (item.price * quantity);
    }, 0).toFixed(2);
  };

  const orderPlace = () => {
    if (Object.keys(cart).length === 0) {
      alert('No items in cart');
    } else {
      const order = Object.entries(cart).map(([id, quantity]) => {
        const item = menuItems.find(item => item.id === parseInt(id));
        return `${item.title}: ${quantity}`;
      }).join(', ');
      alert(`Order placed! You ordered: ${order}`);
      emptyCart();
    }
  };
  
  return (
    <div>
      <JapaneseRestaurant />
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
            onAdd={() => addItem(item.id, item.price)}
            onRemove={() => removeItem(item.id)}
            itemCount={cart[item.id] || 0}
          />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <p>Total: ${total()}</p>
        <button onClick={orderPlace}>Order</button>
        <button onClick={emptyCart}>Clear all</button>
      </div>
    </div>
  );
}

export default App;

