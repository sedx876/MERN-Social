import React, { useContext, useEffect, useState } from 'react'
import {UserContext} from '../../App'
import M from 'materialize-css'
import { Link } from 'react-router-dom'

const Home = () => {
	const [data, setData] = useState([])
    const {state,dispatch} = useContext(UserContext)

	useEffect(() => {
		fetch('/allpost',{
			headers:{
				"Authorization":"Bearer"+ localStorage.getItem("jwt")
			}
		}).then(res=>res.json())
		.then(result=>{
			 console.log(result);
			 setData(result)
		})    
	 },[])

	 const deletePost = (postId)=>{
        fetch(`/deletepost/${postId}`,{
            method:"delete",
            headers:{
                "Authorization":"Bearer"+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            const newData= data.filter(item=>{
                return item._id !== result.id
            })
            M.toast({html:"Post Deleted",classes:"#9575cd deep-purple lighten-3"})
            setData(newData)
        })
    }

	const likePost = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer"+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData = data.map(item=>{
                if (item._id==result._id) {
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err);
        
        })
    }

	const unlikePost = (id)=>{
        fetch('/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer"+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            const newData = data.map(item=>{
                if (item._id==result._id) {
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err);
        })
    }

	const makeComment = (text,postId)=>{
        fetch('/comment',{
            method:"put",
            headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer"+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                name:localStorage.getItem("user").name,
                text
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            const newData = data.map(item=>{
                if (item._id==result._id) {
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err);  
            })
    }

	function refreshPage() {
		setTimeout(()=>{
			window.location.reload(false);
		}, 300);
		console.log('page to reload')
	}

	return (
		<div className='home'>
			{/* <div className='card home-card center pink lighten-1'>
				<h5>AndyCandy</h5>
				<div className='card-image pink lighten-1'>
				<img 
					className='pink lighten-1'
					src={'https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697__340.jpg'}
				/>
				</div>
				<div className='card-content'>
					<i className='material-icons' 
						style={{color:'pink'}}>thumb_up</i>
					<h6>Title of Da Card</h6>
					<br/>
					<p>Awesome Sauce Normally, both your asses would be dead as 
						fucking fried chicken, but you happen to pull this shit while 
						I'm in a transitional period so I don't wanna kill you, I wanna 
						help you. But I can't give you this case, it don't belong to me. 
						Besides, I've already been through too much shit this morning over 
						this case to hand it over to your dumb ass.
					</p>
					<input type='text' placeholder='Add a Comment'/>
				</div>
			</div>

			<div className='card home-card center pink lighten-1'>
				<h5>AndyCandy</h5>
				<div className='card-image pink lighten-1'>
				<img 
					className='pink lighten-1'
					src={'https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643__340.jpg'}
				/>
				</div>
				<div className='card-content'>
					<i className='material-icons' 
						style={{color:'pink'}}>thumb_up</i>
					<h6>Title of Da Card</h6>
					<br/>
					<p>Awesome Sauce Normally, both your asses would be dead as 
						fucking fried chicken, but you happen to pull this shit while 
						I'm in a transitional period so I don't wanna kill you, I wanna 
						help you. But I can't give you this case, it don't belong to me. 
						Besides, I've already been through too much shit this morning over 
						this case to hand it over to your dumb ass.
					</p>
					<input type='text' placeholder='Add a Comment'/>
				</div>
			</div>

			<div className='card home-card center pink lighten-1'>
				<h5>AndyCandy</h5>
				<div className='card-image pink lighten-1'>
				<img 
					className='pink lighten-1'
					src={'https://cdn.pixabay.com/photo/2020/09/26/08/05/amusement-park-5603424__340.jpg'}
				/>
				</div>
				<div className='card-content'>
					<i className='material-icons' 
						style={{color:'pink'}}>thumb_up</i>
					<h6>Title of Da Card</h6>
					<br/>
					<p>Awesome Sauce Normally, both your asses would be dead as 
						fucking fried chicken, but you happen to pull this shit while 
						I'm in a transitional period so I don't wanna kill you, I wanna 
						help you. But I can't give you this case, it don't belong to me. 
						Besides, I've already been through too much shit this morning over 
						this case to hand it over to your dumb ass.
					</p>
					<input type='text' placeholder='Add a Comment'/>
				</div>
			</div> */}


{data.map(item=>{
                return(
                <div className="card home-card" key={item._id}>
                <h5><Link to={"/profile/"+item.postedby._id}>{item.postedby.name}</Link>
                <i class="material-icons" 
                style={{float:'right'}}
                onClick={()=>{
                    deletePost(item._id)
                    refreshPage()
                }}>delete</i>
                </h5>
                <div className="card-image">
                    <img src={item.photo} alt=""/>
                </div>
                <div className="card-content">
                {item.likes.includes(state._id)?
                <i class="material-icons" 
                    onClick={()=>{
                    unlikePost(item._id)
                }}>favorite</i>
                :<i class="material-icons" 
                    onClick={()=>{
                    likePost(item._id)
                }}>favorite_border</i> }
                
                
                    <h6>{item.likes.length} likes</h6>
                    <h6>{item.title}</h6>
                    <p>{item.body}</p>
                    {
                        item.comments.map(record=>{
                            return (
                                <h6><span style={{fontWeight:"600"}}>
                                {record.postedBy.name}
                                </span> {record.text}</h6>)
                        })
                    }
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        makeComment(e.target[0].value,item._id)
                    }}>
                        <input type="text" placeholder="add a comment"></input>
                    </form>
                </div>
            </div>
        ) 
            })}

		</div>
	)
}

export default Home

