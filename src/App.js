import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import './App.css';
import Home from "./Pages/Home"
import RenderPost from "./Pages/RenderPost"

function App() {
  const navigate = useNavigate();

  let onNavigate = (page) => {
    navigate(page)
  }

  return (
    
    <div className="App">
      
      <nav>
        
      <Link to="/">
          <p>home</p>
      </Link>
      
      </nav>
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/renderposts/:id" element= {<RenderPost />} />
     

      </Routes>

      
    </div>
  );
}

export default App;
