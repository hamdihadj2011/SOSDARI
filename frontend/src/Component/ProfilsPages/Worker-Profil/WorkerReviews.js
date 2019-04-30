import React from 'react';
import '../../css/ReviewList.css'
const WorkerReviews = (props) => {
    const { Single = {}} = props
    const {
                   
                   UserID= 'none', 
                   Content= 'none', 
                   Date= 'none', 
                   Time='none',
                   CommitementRating= 0,
                   QualityRating= 0,
    } =  Single
   
        return (
          <div>
                  
                  
<div className="card"  style={{marginBottom: '1%'}}>
<div className="card-header text-center" >
    Review  
          
         
         
        
          </div>
<div className="card " style={{padding: '1%'}}>
  <div className="card-header bg-success">
  User Id: {UserID }  </div>
  <div className="card-body">
    <h5 className="card-title">{Content} </h5>
    <p className="card-text"></p>
    <div>
        <p>Commitment Rating</p>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${CommitementRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
    <div>
        <p>Service Quality Rating</p>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-info" role="progressbar"style={{width: `${QualityRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
  </div>
  <div className="card-footer bg-success">
   <p>At {Time },  {Date} </p>
  </div>
</div>
</div>      
        </div>);
     
    }

export default WorkerReviews;

