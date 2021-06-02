import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path='/'></Route>
      </Router>
    </div>
  );
}

export default App;
