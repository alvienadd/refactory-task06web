import logo from './logo.svg';
import './App.css';

import Homepage from 'scenes/Homepage';
import Header from 'parts/Header';
import Introduction from 'parts/Introduction';
import Expertise from 'parts/Expertise';
import Teams from 'parts/Teams';
import Contact from 'parts/Contact';
import Footer from 'parts/Footer';

function App() {
  return (
    <div style={{backgroundColor:'#171717'}}>
      <Header/>
      <Introduction/>
      <Expertise/>
      <Teams/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
