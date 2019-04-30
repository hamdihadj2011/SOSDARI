import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class DeleteUser extends React.Component {
    delete=()=>{
axios.delete('/delete_user/'+this.props.id).then(res=>
    alert('User deleted'))
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
                <input type='submit' value='Confirm Delete' onClick={this.delete} style={style}></input>
                </Link>
            </form>
         );
    }
}
 
export default DeleteUser;