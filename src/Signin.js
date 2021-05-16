import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div class="hearder">
        <div id="header"> 
       <h1>Sign In</h1> 
            </div>
<div id="form">

<form>



<input type="text" placeholder= "Email" required/>

<input type="password" placeholder="Password" required/>

<Link to ="/signup">
<input class="button" type="submit" value="LOGIN"/>
</Link> 

</form>

</div>
</div>
    )
}

export default SignIn
