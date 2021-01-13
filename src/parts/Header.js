import React from 'react';
import classes from 'assets/css/Header.css';
import classesbs from 'assets/css/bootstrap.css';

import img1 from 'assets/img/background/create.png';
import img2 from 'assets/img/background/entrepreneur.jpg';
import img3 from 'assets/img/background/computer.jpg';
import img4 from 'assets/img/background/code.jpg';
import img5 from 'assets/img/logo/logo2.png';

export default function Headers() {
    return(
    
    <div className="layer">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        <img className="d-block w-80" style={{height:80}} src={img5}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-right offset-5" id="navbarNav">
                    <ul className="navbar-nav text-uppercase mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Introduction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Expertise</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Teams</a>
                        </li>
                    </ul>
                    </div>
                </div>
             </nav>
    <div className="card-body">
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{top:50,zIndex:3,left:-300}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{top:50,zIndex:3,left:-300}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{top:50,zIndex:3,left:-300}}></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" style={{top:50,zIndex:3,left:-300}}></li>
            </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" style={{height:500}} src={img1} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{height:500}} src={img2} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{height:500}} src={img3} alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{height:500}} src={img4} alt="Third slide"/>
          </div>
      
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    </div>



    )
}