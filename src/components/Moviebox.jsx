import React from "react";
import '../assets/style.css/Moviebox.css'

const Moviebox = ({image,title}) => {

  return (
    <>
       {/* this component is used to display the image and title of the Movie ,it takes all the data with the help of Props */}
            <div className="Moviebox">
            <div  className=" movie">
              <img src={image} alt={title} className="thumbnail" />
            </div>
            <h2 className="movie-title">{title}</h2>
            </div>    
        </>
        );
    };

export default Moviebox;
