import React, {Component} from 'react';
import './HOC.css'
function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  
    render(){
    
        return this.props.workers.length===0 ? <div><p className="pidesgin" > workers not Found ... </p><div className="loader"></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }

}
export default LoaderHOC;