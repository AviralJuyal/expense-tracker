import './App.css';
import Login from './Components/Login';
import Modal from 'react-awesome-modal';
import { useState } from 'react';
import Register from './Components/Register';

function App() {
  const [modalLogin, setmodalLogin] = useState(false)
  const [modalRegister, setmodalRegister] = useState(false)

  const closeModal = ()=>{
    setmodalLogin(false);
    setmodalRegister(false);
  }
  const openModalLogin = ()=>{
    setmodalLogin(true);
  }
  const openModalRegister = ()=>{
    setmodalRegister(true);
  }

  return (
    <div className='mainBody mt-2'>
      
      <button type="button" class="btn btn-success mx-2" onClick={openModalLogin}>Login</button>
      <button type="button" class="btn btn-primary me-2" onClick={openModalRegister}>Register</button>
      <Modal visible={modalLogin} width="318" height="336" effect="fadeInUp" onClickAway={closeModal}>
        <Login/>
      </Modal>

      <Modal visible={modalRegister} width="318" height="336" effect="fadeInUp" onClickAway={closeModal}>
        <Register/>
      </Modal>
    </div>
  );
}

export default App;
