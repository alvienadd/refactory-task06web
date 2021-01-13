import React from 'react';
import classes from 'assets/css/Header.css';
import classesbs from 'assets/css/bootstrap.css';

export default function Introduction() {
    return(
        <section className="p-5">
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <h3 style={{fontFamily:'Poppins',fontWeight:'bold',fontSize:42,color:'white'}}># Introduction</h3>
                </div>
            </div>
            <div className="row pl-5">
                <div className="col-lg-4">
                    <p style={{position:'relative',zIndex:7,fontFamily:'Poppins',fontWeight:'bold',color:'white',fontSize:60,letterSpacing:6}}>Let's us introduce ourselves</p>
                </div>
                <div class="d-none d-lg-block" style={{position:'absolute',zIndex:6,left:430,top:620, width:250,height:250,backgroundColor:'#08236A',borderRadius:200}}></div>
                <div className="col-lg-3">
                    <div className="border-top mt-4" style={{marginLeft:60}}></div>
                </div>
                <div className="col-lg-5">
                    <p style={{fontFamily: 'Poppins',fontWeight:'bold',color:'white',fontSize:36,letterSpacing:2.5}}>We Are Professional Digital Agency that focus on Digital Transformation</p>
                    <p style={{fontFamily: 'Poppins',color:'white',fontSize:20}}>Alvien Codes Media are passionate on Digital Business transformation that focuses on UI / UX Design, Website Development, Android Development, Desktop Development. Alvien Codes Media Was founded in 2020, located in Indonesia.</p>
                    <br/>
                    <div className="d-sm-block d-md-block d-lg-inline">
                        <a href="" className="btn text-white" style={{backgroundColor:'#08236A',fontSize:32,fontFamily:'Poppins',fontWeight:'bold'}}>See More</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    )
}