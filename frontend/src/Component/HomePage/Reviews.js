import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText} from "mdbreact";
import imageone from '../images/user1.jpg'
import imagetwo from '../images/user2.jpg'
import imagethree from '../images/user3.jpg'
import imagefour from '../images/user4.jpg'
import imagefive from '../images/user5.jpg'
import imagesix from '../images/user6.jpg'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import '../css/FeaturesPage.css'
class Reviews extends Component {


  render() {
    return (
     <div>
     <section className="text-center my-5" style={{padding: '2%'}} >
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Users Reviews     </h2>
      <MDBRow>
        
          
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce >
            <MDBCardImage
              cascade
              src={imageone}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>User</h5>
              </a>
              <MDBCardTitle>
                <p className="blue-text">
                  Rahma Hajji
                </p>
                   
              </MDBCardTitle>
              <p className="starsanimation">
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} /> 
              <FaStar style={{ color: "gold"}} />      </p>  
              <MDBCardText>
              It help me to gain time by providing a solution in a single click.
              </MDBCardText>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src={imagetwo}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Worker</h5>
              </a>
              <MDBCardTitle>
              <p className="blue-text">
                 Mohamed Ali 
                </p>
              </MDBCardTitle>
              <p className="starsanimation">
                
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} /> 
              < FaStarHalfAlt style={{ color: "gold"}} />      </p>
              <MDBCardText>
               It helped me to expand my work and increase my productivity. 
              </MDBCardText>
              </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src={imagethree}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>User</h5>
              </a>
              <MDBCardTitle>
              <p className="blue-text">
                Olfa Chaabni
                </p>
              </MDBCardTitle>
              <p className="starsanimation">
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} /> 
              <FaStar style={{ color: "gold"}} />      </p>  
              <MDBCardText>
              It provides a very secure services and that's what I like.
              </MDBCardText>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src={imagefour}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>Worker</h5>
              </a>
              <MDBCardTitle>
              <p className="blue-text">
                Haithem azziz
                </p>
              </MDBCardTitle>
              <p className="starsanimation">
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} /> 
              < FaStarHalfAlt style={{ color: "gold"}} />      </p>  
              <MDBCardText>
              It helped my company to be open to a wider market place.
              </MDBCardText>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src={imagefive}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>User</h5>
              </a>
              <MDBCardTitle>
              <p className="blue-text">
                Mira kHalid
                </p>
              </MDBCardTitle>
              <p className="starsanimation">
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} /> 
              <FaStar style={{ color: "gold"}} />      </p>  
              <MDBCardText>
              All the workers are professional and they take their job seriously.            </MDBCardText>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="2" md="6" className="mb-lg-0 mb-4">
          <MDBCard cascade narrow ecommerce>
            <MDBCardImage
              cascade
              src={imagesix}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody cascade className="text-center">
              <a href="#!" className="grey-text">
                <h5>User</h5>
              </a>
              <MDBCardTitle>
              <p className="blue-text">
                Nour fraj
              </p>
              </MDBCardTitle>
              <p className="starsanimation">
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} />
              <FaStar style={{ color: "gold"}} /> 
              <FaStar style={{ color: "gold"}} />      </p>  
              <MDBCardText>
              Work makes arranging appointment difficult But, Not with SOSDARI.
             </MDBCardText>
             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
     </div>
  
     
    );}

  }



export default Reviews;