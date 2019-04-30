import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {connect} from 'react-redux'
import {addMessage} from '../../actions'
import '../css/contactus.css'
class ContactUsForm extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:'',
            Email:'',
            Subject:'',
            Message:''
        }
    }

    handelchange =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
      this.setState({
        [name]:value
      })}

      addMsg=(e) =>{
          e.preventDefault()
      this.props.dispatch(addMessage(this.state)) 
      }


  render() {
    return (
      <div className="divpadding">
 	<div class="container-contact100">
		<div class="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422" data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1">
<iframe  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Avenue%20des%20orangers%2C%20Hammam%20Sousse%2C%20Tunisa+(GoMyCode)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
 frameborder="0" scrolling="no" style={{height: "100%",width: "100%"}} title='Our Position'>
 <a href="https://www.maps.ie/map-my-route/">Create route map</a>
 </iframe>
        </div>

		<div class="wrap-contact100"  >
        <MDBContainer  >
      <MDBRow>
        <MDBCol md="12">
        <form class="text-center border border-light p-5">

<p class="h4 mb-4">Contact us</p>


<input value={this.state.Name} name='Name' type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" onChange={this.handelchange}/>


<input value={this.state.Email} name='Email' type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" onChange={this.handelchange}/>

<label>Subject</label>
<select class="browser-default custom-select mb-4" name='Subject' onChange={this.handelchange}>
    <option value="" disabled>Choose option</option>
    <option value="Feedback" selected>Feedback</option>
    <option value="Report a bug">Report a bug</option>
    <option value="Feature request">Feature request</option>
    <option value="Feature request">Feature request</option>
</select>
<div class="form-group">
    <textarea value={this.state.Message} class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message" name='Message' onChange={this.handelchange}></textarea>
</div>
<div class="custom-control custom-checkbox mb-4">
    <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy"/>
    <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
</div>
<button class="btn btn-warning btn-block" type="submit" onClick={this.addMsg}>Send</button>

</form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
		</div>
	</div>



	<div id="dropDownSelect1"></div>


     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  };
}



export default connect(mapStateToProps)(ContactUsForm) ;