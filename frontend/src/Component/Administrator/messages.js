import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getMessage} from '../../actions'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import axios from 'axios'



class Messages extends React.Component {
   

    componentDidMount(){
        
        this.props.dispatch(getMessage())
    }
   
    render() { 
        const {listMsg}=this.props.listMsg
        if(listMsg){
            return ( 
                <div className='admin'>
    
    <Table style={{border:'1px solid #000',fontSize:'22px'}}>
        <Thead>
        <Tr>
            <Th className="custom-class-1">Name</Th>
            <Th sort="number">Email</Th>
            <Th sort="number">Content</Th>
            <Th sort="number">Delete</Th>
        </Tr>
        </Thead>
        <Tbody >
            {
                listMsg.map((el,i)=>
                    <Tr key={el.i} >
                        <Td className="custom-class-2">{el.Name}</Td>
                        <Td sort={el.Email}>{el.Email}</Td>
                        <Td sort={el.Message}>{el.Message}</Td>                 
                        <Td sort=''><Link to={`/delete_user/${el._id}`} >Delete User</Link></Td>
                    </Tr>
                )
            }
        </Tbody>
     </Table>
    
    
    
    </div>
             );
        }
        else{
            return null
        }
        
         
    }
}
 
function mapStateToProps(state) {
    
    return {
      listMsg: state.message
    };
  }

export default connect(mapStateToProps)(Messages);