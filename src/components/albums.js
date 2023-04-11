import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../axios/axios'
import AuthContext from '../context/AuthProvider'

import './home.css'
import './posts.css'
import Sidebar from './sidebar'

function Albums() {
  const auth = useContext(AuthContext);
  const [albums, setAlbums] = useState([]);
  const getData = async() => {
    try{
      const res_albums = await axios.get("/albums");
      console.log(res_albums.data);
      setAlbums(res_albums.data);
    } catch(err) {
      console.log(err);
    }
  }
//UseEffect is a hook, it rerenders the page 
  useEffect(()=>{
    getData();
  }, []);


  return (
    <>
    {auth.auth ? 
    (
<div class="wrapper">
       <div class="section">
		<div class="top_navbar">
			<div class="hamburger">
				<Link to="home">
					<i class="fas fa-bars"></i>
				</Link>
			</div>
		</div>
		<div class="container">
			{/* Album data */}
      <div class="main">
        <ul class="cards">
          {albums.map((album)=>{
            return(
              <li class="cards_item">
            <div class="card">
              {/* <div class="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. " /></div> */}
              <div class="card_content">
                <Link to={`${album.id}`}><h2 class="card_title">Album: {album.title}</h2></Link>
                <div class="card_text">
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
        
  <Sidebar/>

      </div>
    ) 
  :
  (<div>You are not authenticated</div>)
  }
        
    
      </>
  )
}

export default Albums
