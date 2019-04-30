import React from 'react'
import {connect} from 'react-redux'
import {getReclamation} from '../../actions'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-amazing-table-sorter';
import './example.scss';
import axios from 'axios'

class Reclamtion extends React.Component {
   

    componentDidMount(){

        this.props.dispatch(getReclamation())
    }
    render() { 
        const {reclam}=this.props.listReclamation
        console.log(reclam)
        if(reclam){

            return ( 
           
                <div className='admin'>
                
                <Table>
                <Thead>
                    <Tr>
                        <Th className="custom-class-1">UserId</Th>
                        <Th sort="number">Content</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        
                        {
                         reclam.map((el,i)=>
                                <Tr key={i}>
                                    <Td className="custom-class-2">{el.UserID}</Td>
                                    <Td sort={el.LastNameWorker}>{el.Content}</Td>
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
        listReclamation: state.reclam
    };
  }
export default connect(mapStateToProps)(Reclamtion);