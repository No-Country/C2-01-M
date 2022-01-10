import "./App.css"
import ItemList from "./components/item/itemList"
import Header from "./components/header/index"
import Cart from "./components/cart/cart"

function App() {
  return (
    <div className='App'>
      <Header />
      <ItemList />
      <Cart />
    </div>
  )
}

export default App
