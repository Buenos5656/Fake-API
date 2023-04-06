import './App.css';

// Importing react-router-dom
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Albums from './components/albums';
import Posts from './components/Posts';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/albums" element={<Albums />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/todos" element={<Todos />} />
     </Routes>
    </div>
  );
}

export default App;
