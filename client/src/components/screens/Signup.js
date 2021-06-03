import React from 'react'
import {Link} from 'react-router-dom'


const Signup = () => {
	return (
		<div className='mycard'>
			<div class="card auth-card pink lighten-1">
        <h2>QueenTeens</h2>

				<input type='text'
				placeholder='Enter Name'
				className='center'/>
			
				<input type='text'
				placeholder='Email'
				className='center'/>

				<input type='text'
				placeholder='Password'
				className='center'/>

				<button 
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
