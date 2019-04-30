import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'


class UserDashboard extends Component {
  render() {
    return (
     <div>
       <p>Hello Redirect from User Login</p>
       <Link  to="/search"><button className="btn-clad">search</button></Link>
     </div>
    );
  }
}

export default UserDashboard;
