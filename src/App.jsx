import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeOrder/Placeorder'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
<>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path = "/cart" element={<Cart/>}/>
  <Route path = "/order" element={<Placeorder/>}/>

</Routes>
</>
  )
}


export default App
