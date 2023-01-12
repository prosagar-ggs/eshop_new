import './App.css';
import Home from './Home';
import Login from './Login';
import { Route, Routes} from "react-router-dom";
import Checkout from './Checkout';

const App = () =>{
  return (
    <div className="App"> 
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/checkout' element={<Checkout /> }/>
      <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
