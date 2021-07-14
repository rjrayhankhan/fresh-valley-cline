import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/admin">
           <Admin></Admin>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
    </Router>
  );
}

export default App;
