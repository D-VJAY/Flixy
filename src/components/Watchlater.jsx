 import React from "react";
 import '../assets/style.css/Watchlater.css'
 import Moviebox from "./Moviebox";
  
   import Playbutton from "./Playbutton";
 function Watchlater  () {
   //Retriving Data from localStorage and applying map() function over it to display the Data
  const StoredData = JSON.parse(localStorage.getItem("Myarray"));
  return(
    <div className="watchlater">
       < div className="boxA">
       {
        
         StoredData.map((StoredData) =>{
           return(
             <div key={StoredData.id} className="container">
                      <Moviebox title={StoredData.Name}  image={StoredData.Image} />
                      <div className="buttonp">
                         <Playbutton  video={StoredData.video}   />    
                       </div>
                  </div>
                )
              })
            } 

       </div>

       </div> 
     
     
     )
    }
    
    export default Watchlater
    
    
    // localStorage.setItem("watchlater", JSON.stringify(StoredDatas));
    // const StoredData = JSON.parse(localStorage.getItem("watchlater"));