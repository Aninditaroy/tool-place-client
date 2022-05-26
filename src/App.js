
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import ToolsCard from './Pages/Home/ToolsCard';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<ToolsCard />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
