import React, { Component } from 'react';
import '../css/Sign.css'
import SosdariHeader from '../SosdariHeader.js';
import SosdariFooter from '../SosdariFooter.js';
import LoginRoute from './User/loginRoute.js'
import WorkerRoute from './Worker/workerloginroute.js'
class Sign extends Component {

  render() {
    return (
      <div>
   <SosdariHeader/>
             <div>
 
    <div className='home'>
        
       <LoginRoute />
       <WorkerRoute /> 
     </div>
       </div>
  <SosdariFooter/>
      </div>
    )
  }
}

export default Sign;