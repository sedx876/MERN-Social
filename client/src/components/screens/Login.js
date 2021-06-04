import React, { useState ,useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from '../../App'
import M from 'materialize-css'


const Login = () => {

		const {state,dispatch} = useContext(UserContext)
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const history = useHistory()

	const PostData =()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html:"Invalid Email",classes:"#d50000 red accent-4"})
            return
        }      fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    password:password,
                    email:email
                }
            )
        }).then(res=>res.json()).then(data=>{
            if(data.error){
                M.toast({html:"Invalid",classes:"#d50000 red accent-4"})
            }else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"Sign in Successful",classes:"#9575cd deep-purple lighten-3"})
                history.push("/")
            }
        }).catch(err=>{
          console.log(err);
        })  
    }

	return (
		<div className='mycard'>
			<div className="card auth-card  pink lighten-1">
        <h2>QueenTeens</h2>

			
				<input type='text'
				placeholder='Email'
				className='center'
				value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
      	}}/>

				<input type='text'
				placeholder='Password'
				className='center'
				value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
        }}/>

				<button 
					className="btn waves-effect waves-light pink lighten-4 black-text center" 
					type="submit" 
					name="action">
						LOGIN
            <i className="material-icons right"
            onClick={()=>{
                PostData()
            }}>send</i>
            </button> 

				<h6 className='black-text center'>
					<Link to='/signup'>Don't Have an Account?</Link>
				</h6>
      </div>
		</div>
	)
}

export default Login
