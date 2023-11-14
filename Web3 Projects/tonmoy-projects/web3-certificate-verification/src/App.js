import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Footer, Loader, Welcome } from "./Components/index"
import Add from "./pages/Admin/Add";
import Admin from "./pages/Admin/Admin";
import Edit from "./pages/Admin/Edit";
import Home from "./pages/Home/Home";
import ServiceCard from './Components/ServiceCard'
import Search from "./pages/Admin/Search";

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Admin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<Admin />} />
      </Routes>
      <ServiceCard />
      <Footer />
    </div>
  );
}

export default App;
