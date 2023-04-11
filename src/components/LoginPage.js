import React, {useContext, useEffect, useState} from 'react'
import AuthContext from '../context/AuthProvider';
import {users} from '../users/users'

import './loginpage.css'



function LoginPage() {
  const auth = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("")
  // const user = {
  //       "id": 1,
  //       "name": "Leanne Graham",
  //       "username": "Bret",
  //       "email": "Sincere@april.biz"
  //   }

    function login() {
      let user = users.filter((user)=>{
        return (user.username).toUpperCase == username.toUpperCase()
      });
      console.log("Login", user);
      window.localStorage.setItem("isLoggedIn", true);
      window.localStorage.setItem("user", JSON.stringify(user));
    }
    
    function logout(){
      window.localStorage.removeItem("isLoggedIn");

    }

    useEffect(()=>{
      console.log(username)
    }, [username]);

  return (
    <>
    {isLoggedIn? 
    (
      <div>
        <div>You are logged in.</div>
        <button onSubmit={logout}>Logout</button>
      </div>
    ) 
    : 
    (
      <div>
      {/* Welcome to login page!!!
      <form>
          UserName: <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button onClick={login}>Login</button>
      </form> */}



      {/* Starter code */}
      <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name, eg: Bret" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
				</div>
				<button class="button login__submit" onClick={login}>
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				{/* <h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div> */}
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
    )  
    
  }
  </>
  )
}


export default LoginPage;