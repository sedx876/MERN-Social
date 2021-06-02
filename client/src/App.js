import './App.css'
import Navbar from './components/Navbar'
import Home from './components/screens/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path='/' component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
