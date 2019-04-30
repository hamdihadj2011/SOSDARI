import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import CustomTab from './CustomTab'
import Login from './login'
import SignUp from './signup'

const LoginRoute = () => {
    return ( 
        <div className='tab'>
        
      <h3 style={{textAlign:'center',fontWeight:"bold",color:"chocolate"}}>Users Registratins</h3>  
    <Tabs activeTab='about'>
      <TabList>
        <Tab component={CustomTab} label='Login'  id='info' />
        <Tab component={CustomTab} label='SignUp' id='about' />
      </TabList>
      <TabList>
        <TabPanel component={Login} id='info' />
        <TabPanel component={SignUp} id='about' />
      </TabList>
    </Tabs>
        
        </div>
     );
}
 
export default LoginRoute;