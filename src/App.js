
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
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddTool from './Pages/Dashboard/AddTool';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageTool from './Pages/Dashboard/ManageTool';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tools' element={<ToolsCard />}></Route>
        {/* <Route path='/myportfolio' element={<Portfolio />}></Route>
        <Route path='/blog' element={<Blog />}></Route> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/tools/:toolId' element={<RequireAuth>
          <ToolDetails />
        </RequireAuth>}></Route>
        <Route path="dashboard" element={<RequireAuth>
          <Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='addtool' element={<AddTool />}></Route>
          <Route path='managetool' element={<ManageTool />}></Route>
          <Route path='manageorders' element={<ManageAllOrders />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
