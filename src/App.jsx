import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WishCard from "./pages/WishCard"
import SendMessage from "./pages/SendMessage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="wish-card" element={<WishCard />}/>
        <Route path="send-message" element={<SendMessage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
