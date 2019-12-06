import React from 'react'
import List from '../List'
import Register from '../Register/register'
import  Signin from '../login/login'
import EditForm from '../EditUser/EditUsers'
// import Navigation from '../Navigation/navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
export default function Routes() {
    return (
        <BrowserRouter>
             {/* <Navigation></Navigation> */}
            <Switch>
            <Route path="/signin" exact component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/users" component={List}></Route>
            <Route path = "/editForm" component= {EditForm}/>
        </Switch>
      </BrowserRouter>
     
    );
  }