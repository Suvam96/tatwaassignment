import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <>
    <div class="hearder">
              <div id="header"> 
             <h1>Sign Up</h1> 
                  </div>
    <div id="form">
     
   <form>
      
      <input type="text" placeholder="Name" required/>
      
      <input type="text" placeholder= "Email" required/>
      
      <input type="password" placeholder="Password" required/>
      <Link to="/tree">
      <input class="button" type="submit" value="Sign Up"/>
      </Link>
      
     
    </form>

   </div>
   </div>
    </>
    )
}

export default Signup;
