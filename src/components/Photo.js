import React, {useContext, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios/axios';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

function Photo() {
    const auth = useContext(AuthContext)
    const [photos, setPhotos] = useState([]);
  const params = auth.auth.id;
  

  const getData = async() => {
    try{
      const res_photos = await axios.get("/photos");
      

      let filter_photo = filterPhoto(res_photos.data, params)
      setPhotos(filter_photo);
    } catch(err) {
      console.log(err);
    }
  }

  //Filtering album photo
  const filterPhoto = (photos, id) => {
    return photos.filter((photo)=>{
        return photo.albumId == id
    })
  }


//UseEffect is a hook, it rerenders the page 
  useEffect(()=>{
    getData();
  }, []);


    return (
    <div>
        {auth.auth ? (
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
               {photos.map((photo)=>{
                   return(
                    <li class="cards_item">
                    <div class="card">
                      {/* <div class="card_image"><img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar. " /></div> */}
                      <div class="card_content">
                        <h2 class="card_title">Title: {photo.title}</h2>
                        
                        <div class="card_text">
                          
                          <img src={photo.url} alt="" width="200" height="auto"/>
                        
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
        ) : <div>You are not authenticated</div>}

    </div>
  )
}

export default Photo