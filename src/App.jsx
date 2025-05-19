import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


function App() {
  return (
    <div class="min-vh-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
