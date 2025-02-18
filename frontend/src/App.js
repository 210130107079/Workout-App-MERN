import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>

          <Route
            path="/"
            element={<Home/>}
          />

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
