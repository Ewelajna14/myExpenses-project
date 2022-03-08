import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import NavBar from "./NavBar"
import News from "./News"
import Home from "./Home";
import '../App.css';

function App() {

  let history = useHistory()
  const [user, setUser] = useState(null);
  
  useEffect(() => {
  fetch("/me").then((r) => {
   if (r.ok) {
    r.json().then((user) => setUser(user));
    }
   });
  }, []);


  function onLogin(loguser){
    setUser(loguser)
    history.push("/")
   
  }

  if (!user){
    return <div>
      <Switch>
      <Route exact path="/login">
      <LoginForm onLogin={onLogin} user={user}/>
      </Route>  
      <Route exact path="/sign">
      <SignUpForm onLogin={onLogin}/>
      </Route>
      </Switch>
    </div>
  }


  return (
    <div>
      <NavBar user={user}/>
      <Switch>    
      <Route exact path="/" component={()=><Home setUser={setUser} user={user}/>}/> 
      <Route exact path="/news">
      <News/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;



