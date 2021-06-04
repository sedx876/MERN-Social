import { createContext, useContext,useEffect, useReducer } from 'react';
import { initialState, reducer } from './reducers/userReducer';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Createpost from './components/screens/Createpost'
import TermsOfService from './components/screens/TermsOfService'
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'

export const UserContext = createContext()
const Routing = () =>{
  const history = useHistory()
  const {state,dispatch}=useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({type:"USER",payload:user})
    }else{
      history.push("/login")
    }
  }, [])
  return (<Switch>
      <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/createpost' component={Createpost}/>
        <Route path='/TOS' component={TermsOfService}/>
      </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <UserContext.Provider value={{state,dispatch}}>
      <Router>
        <Navbar/>
        <Routing/>
        <Footer/>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
