import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTabWorker from  './CustomTabWorker'
import WorkerLogin from './workerlogin'
import WorkerSignUp from './workersign'
const LoginRoute = () => {
    return ( 
        <div className='tab'>
        <h3 style={{textAlign:'center',fontWeight:"bold",color:'chocolate'}}>Workers Registratins</h3>
    <Tabs activeTab='about'>
      <TabList>
        <Tab component={CustomTabWorker} label='Login' id='info' />
        <Tab component={CustomTabWorker} label='SignUp' id='about' />
      </TabList>
      <TabList>
        <TabPanel component={WorkerLogin} id='info' />
        <TabPanel component={WorkerSignUp} id='about' />
      </TabList>
    </Tabs>

    
        
        </div>
     );
}
 
export default LoginRoute;