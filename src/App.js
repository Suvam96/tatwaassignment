import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TreeView from "./Category";
import Newcategory from "./NewCategory";

import SignIn from "./Signin";
import Signup from "./Signup";



function App() {
  return (
   <Router>
       <Switch>
       <Route exact path="/">
       <SignIn/>
          </Route>
          <Route exact path="/signup">
           <Signup/>
          </Route>
          <Route exact path="/tree">
              <Newcategory/> 
          </Route>
         
        </Switch>
   </Router>

   
  );
}

export default App;
