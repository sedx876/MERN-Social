import React from 'react'

const Createpost = () => {
  return (
		
			<div className='card input-field pink lighten-1'
			style={{
				margin:"10px auto",
				maxWidth:"500px",
				padding:"20px",
				textAlign:"center"
			}}>
      <input type='text' placeholder='Title'/>
			<input type='text' placeholder='Description'/>
			<div className="btn waves-effect waves-light pink lighten-4 black-text center file-field input-field">
        <span>
					Upload Photo
					<i className="material-icons right">file_upload</i>
				</span>
        <input type="file"/>
				<div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
      </div>
			<br/>
			<button className="btn waves-effect waves-light #e57373 pink lighten-4 black-text">
        UPLOAD POST
      </button>
    </div>
		
			
  )
}

export default Createpost
