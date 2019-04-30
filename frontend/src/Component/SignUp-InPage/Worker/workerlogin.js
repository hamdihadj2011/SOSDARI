import React from 'react'
import { MDBInput, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class WorkerLogin extends React.Component {
  constructor(props)    {
    super(props);
    this.state={
        email:'',
        password:'' 
    }
  }
  handelchange =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
  this.setState({
    [name]:value
  })}


    render(){
      
    return (
       <form >
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                name='email'
                validate
                error="wrong"
                success="right"
                onChange={this.handelchange}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                name='password'
                group
                type="password"
                validate
                onChange={this.handelchange}
              />
            </div>
            <div className="text-center">
              <Link to={((this.state.email === 'hanen@gmail.com' && this.state.password==='10201203Aa' ) 
                    || (this.state.password=== '142563Aa' && this.state.email === 'y.chaheta@gmail.com')) ? '/WorkerProfil/00012' : '/SignInUp'}>
              <MDBBtn 
              color="light-green"
              // onClick={this.check} 
              > 
                Login
                </MDBBtn>
              </Link>
            </div>
          </form>
       

      );
}
}
 
export default WorkerLogin;