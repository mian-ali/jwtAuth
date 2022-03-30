import './App.css';
import Nav from './Component/Nav';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Main from './Component/Main/index';
function App() {
  const user = localStorage.getItem('token');
  return (
    <div>
      <Nav />

      <Routes>
        {user && <Route exact path="/" element={<Main />} />}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
      {/* <Register />
      <Login /> */}
    </div>
  );
}

export default App;
