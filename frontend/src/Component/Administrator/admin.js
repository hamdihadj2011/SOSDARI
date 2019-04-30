import React from 'react'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import SosdariHeader from '../SosdariHeader.js';
import SosdariFooter from '../SosdariFooter' 
class Admin extends React.Component {
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

// check =()=>{
//   if(((this.state.email === 'fouratihanen@gmail.com' && this.state.password==='19091992' ) 
//   || (this.state.password=== '222222' && this.state.email === 'hamdihadjkhlifa@gmail.com'))){
//     return true
//   }
//   else{
//     // return false
//     alert('email or password incorrect')
//   }
// }

    render() { 
        return ( 
          <div>
            <SosdariHeader/>
          
          <MDBContainer fluid style={{backgroundColor: "#8bc34ac9"}}>
          <MDBRow>
            <MDBCol md="8" style={{margin:'5% auto'}}>
              <MDBCard>
                <div className="header pt-3 grey lighten-2">
                  <MDBRow className="d-flex justify-content-start">
                    <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                      Log in
                    </h3>
                  </MDBRow>
                </div>
                <MDBCardBody className="mx-4 mt-4">
                  <MDBInput label="Your email" group type="text" validate name='email' onChange={this.handelchange} />
                  <MDBInput
                    label="Your password"
                    group
                    name='password'
                    type="password"
                    validate
                    containerClass="mb-0"
                    onChange={this.handelchange}
                  />
                  <p className="font-small grey-text d-flex justify-content-end">
                    Forgot
                    <a
                      href="#!"
                      className="dark-grey-text font-weight-bold ml-1"
                    >
                      Password?
                    </a>
                  </p>
                  <div className="text-center mb-4 mt-5">
                    <Link to=
                    {((this.state.email === 'fouratihanen@gmail.com' && this.state.password==='19091992' ) 
                    || (this.state.password=== '222222' && this.state.email === 'hamdihadjkhlifa@gmail.com')) ? '/admin/index' : '/admin'}>
                        <MDBBtn
                          color="warning"
                          type="button"
                          className="btn-block z-depth-2"
                          // onClick={this.check}
                          
                        >
                          Log in
                        </MDBBtn>
                    </Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <SosdariFooter/>
        </div>
         );
    }
}
 
export default Admin;