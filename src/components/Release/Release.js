import React, { useEffect, useState } from 'react'
import './Release.css'
import "../../App.css"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import bigScreenMovieContainer  from './bigScreenMovieContainer';

const Release = (  props, releaseRef  ) => {
    const [state, setState ] = useState(bigScreenMovieContainer);
    const mediaQuery = window.matchMedia('(max-width:499px)');
    
    const getWindowWidth = () =>{
        return( window.innerWidth - 16 < 484 )
            
    }

    useEffect(() => {
        const test = getWindowWidth()
        console.log(test )
        if(test){
            setState(null)
        }
    },[]);
      
  
    

    mediaQuery.addEventListener("change" , (e) => {
      
        if( e.matches ) {          
            setState(null)             
        }else{
            setState(bigScreenMovieContainer);
        }
    });


    return (

        <div className="release" ref = { releaseRef }>
            <div className="content-heading"><span>Realeases</span></div>
            <div className="content-container">      
                    <div className="button-container">
                                <button className="arrow-left-btn"><ArrowLeftIcon /></button>               
                                <button className="arrow-right-btn">< ArrowRightIcon /></button>                       
                    </div>    
                     <div className="item-outer-container" id="item-outer-container">                   

                        { state }
                        
                    </div>         
            </div>
        </div>
    )
}

export default React.forwardRef( Release );
