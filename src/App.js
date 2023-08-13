import './style.css';
import './responsive.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Routes'
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
   </Router>
  );
}

export default App;
