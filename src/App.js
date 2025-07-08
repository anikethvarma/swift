import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Data from './components/Data'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Data/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes></BrowserRouter>
  );
}

export default App;
