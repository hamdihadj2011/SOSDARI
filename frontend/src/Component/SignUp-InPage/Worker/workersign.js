import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {signWorker} from '../../../actions'
import { MDBBtn, MDBInput } from 'mdbreact';
import {FormErrors} from './formError'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class WorkSignUp extends React.Component {
  state={
    FirstName:'',
    LastName:'',
    Email:'',
    Password:'',
    JobWorker:'Not Added',
    CIN:'',
    Adresse:'Not Added',
    Rating1:'0',
    Rating2:'0',
    img:'http://locker.com.au/wp-content/uploads/2017/01/user-icon-png-person-user-profile-icon-20.png',
    PhoneWorker: "Not Added",
    formErrors: {firstname:'',email: '', password: '',cin:''},
    firstnameValid:false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
    CINValid:false,
  }
  handelchange =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
  this.setState({
    [name]:value
  },() => { this.validateField(name, value) })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstnameValid= this.state.firstnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let cinValid =this.state.CINValid;
  
    switch(fieldName) {
      case 'FirstName':
      firstnameValid=value.length >=8;
      fieldValidationErrors.name = firstnameValid ? '' : ' is invalid';
      break;
      case 'Email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'Password':
        passwordValid = (value.length >= 6 && value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/));
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
        case 'CIN':
          cinValid = value.length >= 8 ;
          fieldValidationErrors.cin = cinValid ? '': ' Must be 8 digits';
          break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                     firstnameValid:firstnameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    cinValid:cinValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid 
      && this.state.passwordValid 
      && this.state.firstnameValid 
      && this.state.CINValid});
  }




    
        addWorker=() =>{
          

          this.props.dispatch(signWorker({
            _id:this.state.CIN,
            FirstNameWorker:this.state.FirstName,
            LastNameWorker:this.state.LastName,
            PasswordWorker:this.state.Password,
            EmailWorker:this.state.Email,
            ImageWorker:this.state.img,
            AdresseWorker:this.state.Adresse,
            JobWorker:this.state.JobWorker,
            CommitementRating:this.state.Rating1,
            PhoneWorker: this.state.PhoneWorker,
            QualityRating:this.state.Rating2}))
        }
        
    render(){
      console.log(this.state)
    return (
<div className='workersign'>
                <div style={{color:'red',fontWeight:'bold',textAlign:'center'}}>
                   <FormErrors formErrors={this.state.formErrors} />
                </div>
              <form>
                <div className="grey-text">
                  <MDBInput
                     label="Your FirstName"
                     icon="user"
                     name='FirstName'
                     group
                     type="text"
                     validate
                     error="wrong"
                     success="right"
                     onChange={this.handelchange}
                     value={this.state.FirstName}
                  />
                   <MDBInput
                     label="Your LastName"
                     icon="user"
                     name='LastName'
                     group
                     type="text"
                     validate
                     error="wrong"
                     success="right"
                     onChange={this.handelchange}
                     value={this.state.LastName}
                  />
                  <MDBInput
                   label="Your email"
                   icon="envelope"
                   name='Email'
                   group
                   type="email"
                   validate
                   error="wrong"
                   success="right"
                   value={this.state.Email}
                   onChange={this.handelchange}
                  />
                  <MDBInput
                   label="Confirm your email"
                   icon="exclamation-triangle"
                   group
                   type="text"
                   validate
                   error="wrong"
                   success="right"
                   value={this.state.Email}
                  />
                  <MDBInput
                     label="Your password"
                     icon="lock"
                     name='Password'
                     group
                     type="password"
                     validate
                     value={this.state.Password}
                     onChange={this.handelchange}
                  />
                  <MDBInput
                    label="Your CIN"
                    icon="id-card"
                    name='CIN'
                    required
                    type="text"
                    validate
                    value={this.state.CIN}
                    onChange={this.handelchange}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <Link to='/SignInUp'>
                    <MDBBtn color="cyan" type="submit" onClick={this.addWorker}>
                      Register
                    </MDBBtn>
                  </Link>
                </div>
              </form>
            
          </div>

      );
}}

function mapStateToProps(state){
  return{
    worker:state.worker
  }
}
 
export default connect(mapStateToProps)(WorkSignUp);