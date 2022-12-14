import './App.css';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import DashboardHome from './pages/DashboardHome'
import DashboardAnalysis from './pages/DashboardAnalysis'
import About from './pages/About'

function App() {
  // const [modalLogin, setmodalLogin] = useState(false)
  // const [modalRegister, setmodalRegister] = useState(false)

  // const closeModal = ()=>{
  //   setmodalLogin(false);
  //   setmodalRegister(false);
  // }
  // const openModalLogin = ()=>{
  //   setmodalLogin(true);
  // }
  // const openModalRegister = ()=>{
  //   setmodalRegister(true);
  // }

  return (
    <div className=' mt-2'>
      {/* <Dashboard/> */}
      {/* <button type="button" className="btn btn-success mx-2" onClick={openModalLogin}>Login</button>
      <button type="button" className="btn btn-primary me-2" onClick={openModalRegister}>Register</button>
      <Modal visible={modalLogin} width="318" height="336" effect="fadeInUp" onClickAway={closeModal}>
        <Login/>
      </Modal>

      <Modal visible={modalRegister} width="318" height="336" effect="fadeInUp" onClickAway={closeModal}>
        <Register/>
      </Modal> */}

<Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard-home" element={<DashboardHome/>} />
          <Route path="/dashboard-analysis" element={<DashboardAnalysis/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
