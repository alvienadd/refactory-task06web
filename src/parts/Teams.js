import React,{Component} from 'react';
import classes from 'assets/css/Header.css';
import classesbs from 'assets/css/bootstrap.css';

import img1 from 'assets/img/person/mask.png';

const axios = require('axios').default

export default class Teams extends Component {

    constructor(props){
        super();
        this.state={
            persons:[]
        }
    }

    getPerson= () => {
        axios.get(`https://raw.githubusercontent.com/alvienadd/raw-task06refactory/master/person.json`)
            .then((response)=>{
                // handle success
                console.log(response.data.persons);
                this.setState({
                    persons: response.data.persons,
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
        this.getPerson();
    }

  render(){
    return(
        <section className="designer p-5">
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <h3 style={{fontFamily:'Poppins',fontWeight:'bold',fontSize:42}}># Our Teams</h3>
                    <p className="pl-5" style={{fontFamily:'Arial',fontSize:20}}>Get Best Consultation from Our Teams</p>
                </div>
            </div>
            <div className="row">
            {this.state.persons.map((person,i)=>{
                return(
                    <div className="col-6 col-sm-3 text-center">
                        <figure className="figure">
                            <img src={img1} className="figure-img img-fluid" style={{borderRadius:200,height:180}}/>
                            <figcaption className="figure-caption text-center">
                                <h5 style={{fontSize:28,marginBottom:10}}>{person.name}</h5>
                                <p style={{fontSize:22}}>{person.category}</p>
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