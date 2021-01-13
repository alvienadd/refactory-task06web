import React,{Component} from 'react';
import classes from 'assets/css/Header.css';
import classesbs from 'assets/css/bootstrap.css';

import img1 from 'assets/img/expertise/reactjs.png';
import img2 from 'assets/img/expertise/materialize.png';
import img3 from 'assets/img/expertise/flutter.png';
import img4 from 'assets/img/expertise/b4a.png';
import img5 from 'assets/img/expertise/csharp.png';
import img6 from 'assets/img/expertise/vba.png';


// // Import the library:
// var cors = require('cors');

// // Then use it before your routes are set up:
// app.use(cors());

const axios = require('axios').default

export default class Expertise extends Component {

    constructor(props){
        super();
        this.state={
            expertises:[]
        }
    }

    getExpertise= () => {
        axios.get(`https://raw.githubusercontent.com/alvienadd/raw-task06refactory/master/expertise.json`)
            .then((response)=>{
                // handle success
                console.log(response.data.expertises);
                this.setState({
                    expertises: response.data.expertises,
                });

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
        });
    }

    componentDidMount(){
        this.getExpertise();
    }

render(){
    return(
        <section className="features p-5">
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <h3 style={{fontFamily:'Poppins',fontWeight:'bold',fontSize:42}}># Expertise</h3>
                    <p className="pl-5" style={{fontFamily:'Arial',fontSize:20}}>Expertise in Web, Mobile And Desktop</p>
                </div>
            </div>

            <div className="row pt-5">
                {this.state.expertises.map((expertise,i)=>{
                    return(
                        <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <figure className="figure">
                                    <div className="figure-img">
                                        <div style={{backgroundColor:'#ABABAB',height:165, display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}>
                                            <a href="" className="d-flex justify-content-center">
                                                <img src={expertise.image} className="align-self-center"/>
                                            </a>
                                        </div>
                                    </div>
                                <figcaption className="figure-caption text-center">
                                    <h5 style={{fontSize:28,marginBottom:10}}>{expertise.name}</h5>
                                    <p style={{fontSize:22}}>{expertise.category}</p>
                                </figcaption>
                            </figure>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    )
}

}