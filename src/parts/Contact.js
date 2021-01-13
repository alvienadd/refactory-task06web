import React from 'react';
import classes from 'assets/css/Header.css';
import classesbs from 'assets/css/bootstrap.css';


import img1 from 'assets/img/contact/getintouch.png';

export default function Contact() {
    return(
        <section className="p-5" style={{height:350}}>
            <div className="container w-100" style={{backgroundColor:'#ABABAB'}}>
                <div className="row mb-0 justify-content-between">

                    <div className="d-none col-lg-4 d-lg-block text-center">
                        <img className="d-block" style={{width:350,height:350}} src={img1} alt="First slide"/>
                    </div>
                    <div className="col-sm-6 col-lg-8 pt-4">
                        <p className="border-bottom" style={{fontFamily:'Poppins',fontSize:60,fontWeight:'bold'}}>Let's Get In Touch</p>
                        <p style={{fontFamily:'Poppins',fontSize:40,fontWeight:'bold'}}>Talk To Us :<span style={{fontFamily:'Poppins',fontSize:36}}> +6281325607080</span></p>
                        <p style={{fontFamily:'Poppins',fontSize:40,fontWeight:'bold'}}>Send To :<span style={{fontFamily:'Poppins',fontSize:36}}> alvien@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}