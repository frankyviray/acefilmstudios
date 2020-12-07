import React, { useRef }  from 'react';
import './App.css';
import Main from './components/Main/Main';
// import Footer from './components/Footer/Footer';


import Header from './components/Header/Header';
import About from './components/About/About';
import Release from './components/Release/Release';
import Contact from './components/Contact/Contact';


// class App extends Component{  
//   constructor(props){
//     super();
//     this.resultRef = React.createRef();
      
//     }
const App = () => { 
  
  const aboutRef = useRef();
  const releaseRef = useRef();
  const contactRef = useRef();
    

    
const about_Ref = () => {  

      aboutRef.current.scrollIntoView({        
        behavior: 'smooth',
        block: 'center',        
      });
}


const release_Ref = () => {   
      releaseRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
}

const contact_Ref = () => {           
    
      contactRef.current.scrollIntoView({       
        behavior: 'smooth',
        block: 'center',
      });

      // const scrolledY = window.scrollY;  
      // console.log(scrolledY);
    }

  // render(){  

  return (
  <div className="app">         
     
                {/* <Header about_Ref = { about_Ref }  
                        release_Ref = { release_Ref }
                        contact_Ref = { contact_Ref }/> */}
                <Main/>
                {/* <About ref = { aboutRef }/>
                <Release ref = { releaseRef }/>
                <Contact  ref = { contactRef }/> */}
                {/* <Footer />         */}
        
        
   </div>
  );
}
// } 

export default App;
