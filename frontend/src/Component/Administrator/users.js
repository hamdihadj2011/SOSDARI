import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUsers} from '../../actions'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import axios from 'axios'



class Users extends React.Component {
  

    componentDidMount(){
        
        this.props.dispatch(getUsers())
    }
  
   
    render() { 
        const {user}=this.props.user
        if(user){
            return ( 
                <div className='admin'>
    
    <Table style={{border:'1px solid #000',fontSize:'22px'}}>
        <Thead>
        <Tr>
            <Th className="custom-class-1">FirstName</Th>
            <Th sort="number">LastName</Th>
            <Th sort="number">Email</Th>
            <Th sort="number">Adresse</Th>
            <Th sort="number">Delete</Th>
        </Tr>
        </Thead>
        <Tbody >
            {
                user.map((el,i)=>
                    <Tr key={i} >
                        <Td className="custom-class-2">{el.FirstNameUser}</Td>
                        <Td sort={el.LastNameUser}>{el.LastNameUser}</Td>
                        <Td sort={el.EmailUser}>{el.EmailUser}</Td>
                        <Td sort={el.AdresseUser}>{el.AdresseUser}</Td>                    
                        <Td sort=''><Link to={`/delete_user/${el._id}`} >
                                Delete User
                                
                        </Link></Td>
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

function mapStateToProps(state){
    return{
        user:state.user
    }
}
 
export default connect(mapStateToProps)(Users);