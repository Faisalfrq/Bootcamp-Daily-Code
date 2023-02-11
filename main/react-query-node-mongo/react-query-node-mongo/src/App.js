// import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path='/addUser' element={<AddUser />} />
    </Routes>
  );
}

export default App;
