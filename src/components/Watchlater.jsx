 import React from "react";
 import '../assets/style.css/Watchlater.css'
 import Moviebox from "./Moviebox";
  
   import Playbutton from "./Playbutton";
   import data from '../Data/data.json'
 function Watchlater  () {
   //Retriving Data from localStorage and applying map() function over it to display the Data
  const StoredData = JSON.parse(localStorage.getItem("Myarray"));

  const Constantdata = data.find(item=> item._id === 1);

  return(
    <div className="watchlater">
       < div className="boxA">
       <div key={Constantdata._id} className="container">
                      <Moviebox key={Constantdata._id} title={Constantdata.title}  image={Constantdata.imgsrc} />
                      <div className="buttonp">
                         <Playbutton key={Constantdata._id} video={Constantdata.vidsrc}   />    
                       </div>
                  </div>
       { 
         StoredData && StoredData.map((StoredData) =>{
           return(
             <div key={StoredData._id} className="container">
                      <Moviebox key={StoredData._id} title={StoredData.Name}  image={StoredData.Image} />
                      <div className="buttonp">
                         <Playbutton key={StoredData._id} video={StoredData.video}   />    
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