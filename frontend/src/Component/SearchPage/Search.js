import React,{Component} from 'react';
import axios from 'axios';
import './search.css';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import WorkerList from './workers';
import HeaderUser from '../ProfilsPages/User-Profil/HeaderUser.js';
import FooterUser from '../ProfilsPages/User-Profil/FooterUser.js';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value3:'',
            value2:'',
            value1:0,
            value:0,
            listworkers:[]
          }
    }
    
   

   

    componentWillMount(){
        
        axios.get('/search').then(res=>
            this.setState({
                listworkers:res.data
            }))
    }
    

   changevaluen=(e)=>{
       this.setState({
           value2:e.target.value
       })

   }
   changevaluep=(e)=>{
    this.setState({
        value3:e.target.value
    })

}


getvisibleworker(){
    
    return this.state.listworkers.filter(
        el =>
          el.CommitementRating >= this.state.value && 
          el.QualityRating >= this.state.value1 &&
          el.AdresseWorker.toLowerCase().includes(
            this.state.value3.toLowerCase().trim() 
          ) &&
          el.FirstNameWorker.toLowerCase().includes(
            this.state.value2.toLowerCase().trim() 
          ) 
        )
}

    render() { 

        const stl ={
            fontWeight:"bold",
            color:"#fff"
        }
        return (  
            <div> <HeaderUser _id={this.props.id}/>
            <div className='search-container'>
                    <div className='filter'>
                         <h3 style={stl}>Filter Worker</h3>
                            <h1 style={{color:"white"}}>----------</h1>
                            <p>
            <label style={stl}>Commitement Rating</label>
                                <InputRange
                                    maxValue={100}
                                    minValue={0}
                                    value={this.state.value}
                                    onChange={value => this.setState({ value })} 
                                />

        <label style={{fontWeight:"bold",color:"#fff",marginTop:'35px'}}>Quality Rating</label>

                                <InputRange
                                    maxValue={100}
                                    minValue={0}
                                    value={this.state.value1}
                                    onChange={value1 => this.setState({ value1 })} 
                                />
                            </p>
                            <h1 style={{color:"white"}}>----------</h1>
                            <label style={stl}>Position:</label>
                           <input  type='text' placeholder="Search with Position" value={this.state.value3} onChange={this.changevaluep}/>
                            <h1 style={{color:"white"}}>----------</h1>
                            <label style={stl}>Name of Worker:</label>
                            <input type='text' placeholder='Search with Name' value={this.state.value2} onChange={this.changevaluen}/>
                            {/* <button onClick={this.search} >Filter</button> */}
                     </div>
                   
                   <div className='filterworkergrid'>
                   <WorkerList UserIDone={this.props.id}  workers={this.getvisibleworker()}/>
                   </div>  
                     
            </div>
            <FooterUser/>
            </div>
        );
    }
}



export default Search;