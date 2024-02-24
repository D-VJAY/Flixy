
import React from "react";
import '../assets/style.css/Trending.css'
import Moviebox from "./Moviebox";
import Button from "./Button";
import Playbutton from "./Playbutton";
import axios from "axios";
import { useState, useEffect } from "react";


function Trending() {
  // Data is incoming from the DB Via Express.js and with the help of Axios
  async function getdata() {
    try {
      const response = await axios.get("http://localhost:5000/data");
      return response.data; // Return the data
    } catch (err) {
      console.log(err, "error hai");
      return null; // Return null or handle the error as needed
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getdata();
      if (result) {
        return setData(result);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="Trending-main"> 
        <div className="grid-container">
        {
          // Here we are using map function to create multiple Playbutton and MovieBox component for each and every movie in the Database
          data.map((data)=>{
            return(<div key={data._id} className="Data">
              {/* Data is being then transfered to the Moviebox component via Props */}
               <Moviebox image={data.imgsrc} title={data.title}/>
               <div className="buttons">
               <Button
              title={data.title}
              Image={data.imgsrc}
              video={data.vidsrc}
              id={data._id}
            />
            <Playbutton video={data.vidsrc} name="Play.."/>
            </div>
            </div>)
          })
        }     
        </div>
      </div>
    
  );
}

export default Trending;
