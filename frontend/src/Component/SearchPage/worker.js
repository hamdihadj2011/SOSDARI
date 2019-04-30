import React from 'react'
import {  CardBody, CardTitle, CardText,MDBProgress  } from 'mdbreact';

import MakeAppointement from './MakeAppointement.js'

const Workers = ({worker,UserIDu}) => {
    return ( 
        <React.Fragment>
                <CardBody style={{textAlign:'center',lineHeight:'1.8'}} key={worker.i}>
                    <CardTitle>{worker.FirstNameWorker + ' ' + worker.LastNameWorker}</CardTitle>
                    <CardText>
                    {worker.AdresseWorker}
                    </CardText>
                    <span>Commitement Rating</span>  
                        <MDBProgress material value={worker.CommitementRating} height="15px" color="warning">
                         {worker.CommitementRating+'%'}
                        </MDBProgress>
                        <p>Quality Rating</p>
                        <MDBProgress material value={worker.QualityRating} height="15px" color="success" padding="2px 0">
                        {worker.QualityRating+'%'}
                        </MDBProgress>
                        <CardText style={{color:'red',fontSize:'18px',}}>
                            {worker.Job}
                         </CardText>
                </CardBody>
                <p > <MakeAppointement UserID={UserIDu}  WorkerID={worker._id}/> </p> 
                {/* </Card> */}
    
</React.Fragment>
     );
}
 
export default Workers;