import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import './posts.css'
import { Link } from 'react-router-dom'

import axios from '../axios/axios'
import Sidebar from './sidebar'

function Posts() {
  const auth = useContext(AuthContext);
  const [filterPosts, setFilterPosts] = useState([])
  const getData = async() => {
    try{
      const res_user = await axios.get("/users");
      const res_posts = await axios.get("/posts");
      const res_comments = await axios.get("/comments")
      let posts = res_posts.data.slice(0, 10);
      let users = res_user.data;
      let comments = res_comments .data;
      console.log("Response: ", comments);
      filterData(posts, users, comments);
    } catch(err) {
      console.log(err);
    }
  }

  const filterData = (posts, users, comments) => {
    let filterPost = posts.map((post)=>{
      return {
      id: post.id,
      title: post.title,
      body: post.body,
      username: (users.filter(function(user){
      return user.id == post.id
  }))[0].username,
    comment: comments.filter((comment)=>{
      return comment.postId == post.id
    })
  }
  })
  console.log("Filter post: ", filterPost)
  setFilterPosts(filterPost);
  }


  useEffect(()=>{ 
    getData();
  }, []);

  return (
    <>
     <div>
    <div class="wrapper">
       <div class="section">
		<div class="top_navbar">
			<div class="hamburger">
				<Link to="home" replace>  
					<i class="fas fa-bars"></i>
				</Link>
			</div>
		</div>
		<div class="container">
      <div class="main">
      <ul class="cards">
			{/* Album data */}
      {filterPosts.map((post)=>{
        return(
          <li class="cards_item">
            <div class="card">
              {/* <div class="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. " /></div> */}
              <div class="card_content">
                <h2 class="card_title">{post.title}</h2>
                <h3 className="card_user">{post.username}</h3>
                <div class="card_text">
                  <p>{post.body}</p>
                  <h5>Comments</h5>
                  <h6>User: {post.comment[0].name}</h6>
                  <p className='card_comment'>{post.comment[0].body}</p>
                  <h6>User: {post.comment[1].name}</h6>
                  <p className='card_comment'>{post.comment[1].body}</p>
                </div>
              </div>
            </div>
          </li>          
        )
      })}
      
      </ul>
      </div>


		</div>
	</div>
        <Sidebar />
        
    </div>
 
    </div>
    </>
  )
}

export default Posts
