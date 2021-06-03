import './App.css'
import Navbar from './components/Navbar'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Createpost from './components/screens/Createpost'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/createpost' component={Createpost}/>
      </Router>
    </div>
  );
}

export default App;
