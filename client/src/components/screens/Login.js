import React from 'react'

const Login = () => {
	return (
		<div className='mycard'>
			<div class="card auth-card  pink lighten-1">
        <h2>QueenTeens</h2>

			
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
						LOGIN
            <i className="material-icons right">send</i>
				</button>
      </div>
		</div>
	)
}

export default Login
