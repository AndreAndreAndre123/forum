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
        
      <Link to="/" className='home'>
          <h1 className='home'>home</h1>
      </Link>
      
      </nav>
      <Routes>
      <Route path="/" element= {<Home />} />
      <Route path={`/renderpost/:id`} element= {<RenderPost />} />
     

      </Routes>

      
    </div>
  );
}

export default App;
