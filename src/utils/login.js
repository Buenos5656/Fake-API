import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export const Signin = () => {
    // const [isAuthorized, setIsAuthorized] = useState(false);

  const auth = useContext(AuthContext);
  
    const user = {
      id: '1', 
      user: 'Avaya',
      permissions: ['read'],
      role: ['normal'],
    };
    auth.setAuth(user);
    console.log(user);
  // const myObject = localStorage.getItem("user");

    //Auth is empty but user in localStorage, setAuthorized
    // if(myObject) {
    //   setAuth(JSON.parse(myObject));
    //   setIsAuthorized(true);
    // }

    //Since user is not present, store the user into localStorage
    // if(!myObject && !!user){
    //   localStorage.setItem("user", JSON.stringify(user));
    //   console.log("inside the function:::::")
    //   // setIsAuthorized(true);
    // }

    return user;
  
}
export default Signin