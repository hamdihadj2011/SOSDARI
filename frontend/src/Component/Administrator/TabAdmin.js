import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-re-super-tabs'
import '../css/Administrator.css'
import NavAdmin from './navbar'
import CustomTab from './CustomTab'
import Users from './users'
import Workers from './workers'
import Messages from './messages'
import Reclamation from './reclamation'
import SosdariFooter from '../SosdariFooter';
class TabAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="adminpage">
                <NavAdmin />
                <div  style={{padding: "5%"}}>
            <Tabs activeTab='user'>
            <TabList style={{Position:'fixed',Top:'0'}}>
              <Tab component={CustomTab} label='User' id='user' />
              <Tab component={CustomTab} label='Worker' id='worker' />
              <Tab component={CustomTab} label='Message' id='message' />
              <Tab component={CustomTab} label='Reclamation' id='reclamation' />
            </TabList>
            <TabList>
              <TabPanel component={Users} id='user' />
              <TabPanel component={Workers} id='worker' />
              <TabPanel component={Messages} id='message' />
              <TabPanel component={Reclamation} id='reclamation' />
            </TabList>
          </Tabs></div>
         
          <SosdariFooter/>
            </div>
        );
    }
}
 
export default TabAdmin;