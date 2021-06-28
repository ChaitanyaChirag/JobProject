
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import Search from "./Search"
import { useState } from 'react';
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
      setCartItems([...cartItems, { ...product}]);
    }
  ;
 
  
    
  return (
    <div >
      <Search/>
    
      <div >
        <Main products={products} onAdd={onAdd}></Main>

        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
        
        ></Basket>


      </div>
    </div>
  );
}

export default App;
