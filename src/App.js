import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router
} from "react-router-dom"
import Public from './Routes/Public';
import AuthProvider from "./Context/AuthProvider";
import BuscarProvider from "./Context/BuscarProvider";

function App() {
  return (
    <div className="App">
    <AuthProvider> 
      <BuscarProvider>
        <Router>
          <Public />
        </Router>
      </BuscarProvider>
    </AuthProvider>  
    </div>
  );
}

export default App;
