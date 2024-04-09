import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import WishCard from "./pages/WishCard"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="wish-card" element={<WishCard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
