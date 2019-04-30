import React from 'react';
import '../../css/ReviewList.css'
const UserReviews = (props) => {
    const { Single = {}} = props
    const {
                   
                   WorkerID= 'none', 
                   Content= 'none', 
                   Date= 'none', 
                   Time='none',
                   CommitementRating= 0,
                   QualityRating= 0,
    } =  Single
   
        return (
          <div>
                   <div  >
              <div className="card" >
<div className="card-header text-center" >
    Review   
  </div>
<div className="card " style={{padding: '1%'}}>
  <div className="card-header bg-primary">
    Worker Id:  {WorkerID}  </div>
  <div className="card-body">
    <h5 className="card-title">{Content}</h5><div>
        <p>Commitment Rating</p>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: `${CommitementRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
    <div>
        <p>Service Quality Rating</p>
         <div className="progress">
         <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${QualityRating}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
    </div>
  </div>
  <div className="card-footer bg-primary">
   <p>At  {Time }, {Date}</p>
  </div>
</div>
</div>  
        
        </div>
        </div>);
     
    }

export default UserReviews;

