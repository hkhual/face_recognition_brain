
import React from 'react';
import './Logo.css';
import brain from './brain.png';



const Logo = () => {
    return(
        <div className="ma4 mt0">
            <div className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner"><img style={{paddingTop: '5px'}} className="brain-image" src={brain} alt="Logo"></img></div>
            </div> 
        </div>

    );
}


export default Logo;


