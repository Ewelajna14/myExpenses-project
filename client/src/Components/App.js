import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import '../App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
   fetch("/me").then((response)=>{
     if(response.ok){
       response.json().then((user)=>setUser(user))
     }
   })
  }, [])
  
  return (
    <div>
      <Switch>
      <Route exact path="/">
      <LoginForm/>
      </Route>  
      <Route exact path="/sign">
      <SignUpForm onLogin={setUser} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;



