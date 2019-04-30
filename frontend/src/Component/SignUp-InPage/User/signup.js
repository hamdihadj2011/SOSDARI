import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {signUser} from '../../../actions'
import {FormErrors} from './formError'
import { MDBBtn, MDBInput } from 'mdbreact';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class SignUp extends React.Component {
  constructor(props){
super(props);
this.state={

  FirstName:'',
  LastName:'',
  Email:'',
  Password:'',
  CIN:'',
  Adresse:'Not Added',
  img:'http://locker.com.au/wp-content/uploads/2017/01/user-icon-png-person-user-profile-icon-20.png',
  AdresseUser : "Not Added",
  JobUser : " Not Added",  
 PhoneUser:  "Not Added",
  formErrors: {firstname:'',email: '', password: '',cin:''},
  firstnameValid:false,
  emailValid: false,
  passwordValid: false,
  CINValid:false,
  formValid: false
}
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
      let cinValid =this.state.CINValid
    
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
        && this.state.nameValid 
        && this.state.CINValid});
    }

    addUser=() =>{
      this.props.dispatch(signUser({
        FirstNameUser:this.state.FirstName,
        LastNameUser:this.state.LastName,
        PasswordUser:this.state.Password,
        EmailUser:this.state.Email,
        _id:this.state.CIN,
        ImageUser:this.state.img,
        AdresseUser:this.state.Adresse,
        JobUser : this.state.JobUser,
        PhoneUser: this.state.PhoneUser
      }))
    }

    render(){
      console.log(this.state.CIN)
      
      return (
              <div >
                <div style={{color:'red',fontWeight:'bold',textAlign:'center'}}>
                   <FormErrors formErrors={this.state.formErrors} />
                </div>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Your firstname"
                    icon="user"
                    name='FirstName'
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handelchange}
                    value={this.state.Name}
                  />
                  <MDBInput
                    label="Your lastname"
                    icon="user"
                    name='LastName'
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handelchange}
                    // value={this.state.LastName}
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
                    <MDBBtn color="cyan" type="submit" onClick={this.addUser}   >
                      Register
                    </MDBBtn>
                  </Link>
                </div>
              </form>
            
       
  
</div>
      );
    }
}
 
function mapStateToProps(state){
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(SignUp);