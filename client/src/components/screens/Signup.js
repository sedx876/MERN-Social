import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Signup = () => {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	const PostData = () =>{
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
      {
        M.toast({html:"Invalid Email",classes:"#d50000 red accent-4"})
        return
      } 
		fetch('/signup', {
			method:'post',
			headers:{
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{
					name: name,
					email: email,
					password: password
				}
			)
		}).then(res => res.json())
			.then(data =>{
				if(data.error){
					M.toast({html:data.error, classes:"red darken-4"})
				}else{
					M.toast({html:data.message, classes:"deep-purple lighten-3"})
					history.push("/TOS") //Change to a TOS Page
				}
			console.table(data)
		}).catch(err=>{
			console.log(err)
		})
	}

	return (
		<div className='mycard'>
			<div class="card auth-card pink lighten-1">
        <h2>QueenTeens</h2>

				<input type='text'
				placeholder='Enter Name'
				className='center'
				value={name}
				onChange={(e) => {
					setName(e.target.value)
				}}
				/>
			
				<input type='text'
				placeholder='Email'
				className='center'
				value={email}
				onChange={(e) => {
					setEmail(e.target.value)
				}}/>

				<input type='text'
				placeholder='Password'
				className='center'
				value={password}
				onChange={(e) => {
					setPassword(e.target.value)
				}}/>

				<button 
					onClick={() =>{
						PostData()
					}}
					className="btn waves-effect waves-light pink lighten-4 black-text center" 
					type="submit" 
					name="action">
						REGISTER
            <i className="material-icons right">send</i>
				</button>

				<h6 className='black-text center'>
					<Link to='/login'>Already Have an Account?</Link>
				</h6>
      </div>
		</div>
	)
}

export default Signup
