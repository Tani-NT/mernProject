import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Error404 from "./pages/Error404";
import Footer from "./component/Footer";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Error404/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
