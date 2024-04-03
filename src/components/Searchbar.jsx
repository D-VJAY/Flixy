import React from "react";
import { useState } from "react";
import '../assets/style.css/Searchbar.css'
import SearchButton from "./searchButton";
import data from '../Data/data.json'
const Searchbar = () => {
  const [input, SetInput] = useState("");
  const [output, SetData] = useState([]);
  const [video,SetVideo] = useState('')
  const getdata = (value) => {
   
        const results = data.filter((data) => {
          // return value && data && 
         return value && data.title.toLowerCase().includes(value);
        });
        console.log(results);
        SetData(results);
    
    
  };
  const HandleEvent = (value) => {
    if(value === ''){
      alert("enter valid input")
      getdata('');
      SetInput('');
    }else{
      getdata(value);
      SetInput(value);

    }
  };
const SearchEvent =(data)=>{
  if(data === ''){
    alert("enter valid input")
    SetInput('');
    SetVideo('')
  }else{

    SetInput(data.title);
    SetVideo(data.vidsrc)
  }
}
  return (
    // < className="outer">
       <div className="parent-search">
         <div className="search-bar"> 

          <input
            type="text"
            placeholder="search movies..."
            value={input}
            onChange={(e) => HandleEvent(e.target.value)}
            className="input"
            ></input>

           <SearchButton video={video} name={"search"} /> 
         </div> 

        <div className="search-data">
          {output.map((data) => {
            return (
              <div
              key={data._id}
              className="data"
              onClick={() =>SearchEvent(data) } >
                    <div className={data.title ? 'white':'none'}>
                {data.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Searchbar;
