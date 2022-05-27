
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import ToolDetails from './Pages/Home/ToolDetails';
import ToolsCard from './Pages/Home/ToolsCard';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<ToolsCard />}></Route>
        <Route path='/myportfolio' element={<Portfolio />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/tools/:toolId' element={<RequireAuth>
          <ToolDetails />
        </RequireAuth>}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
