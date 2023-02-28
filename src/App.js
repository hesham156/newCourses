import './App.css';
import Nave from './component/Nave';
import {ToastContainer} from 'react-toastify'
import { useState } from 'react';
import Login from './pages/Login'

function App() {
  const [login,setLogin] = useState(false)

  return (

    <div className="App">
      <ToastContainer/>
     <Nave setLogin={setLogin} />
     {login?<Login/>:""}
    </div>
  );
}

export default App;
