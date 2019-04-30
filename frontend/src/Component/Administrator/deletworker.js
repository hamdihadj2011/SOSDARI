import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class DeleteWorker extends React.Component {
    
    deleteworker=()=>{
axios.delete('/delete_worker/'+this.props.id).then(res=>
    alert('Worker deleted'))
    }


    render() { 
        const style = {
            textAlign: 'center',
            backgroundColor:'red',
            color:'#fff',
            margin:'10% 40%',
            border:'none',
            outline:'none',
            fontSize:'26px',
            padding:'5px',
            borderRadius:'5px',
            cursor:'pointer'
          };
        return ( 
            <form>
                <Link to='/admin/index'>
                <input type='submit' value='Delete worker' style={style} onClick={this.deleteworker} ></input>
                </Link>
            </form>
         );
    }
}
 
export default DeleteWorker;