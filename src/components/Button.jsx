import React from "react";
import { useState ,useEffect} from "react";
import '../assets/style.css/Button.css'

const Button = ({ title, Image, video, id }) => {
  const [watchlaterfunctionality, SetWatchlaterfunctionality] = useState(true);
  const storageKey = `functionality_${id}`;
 
  const Watchlater = () => {

    const existingData = JSON.parse(localStorage.getItem("Myarray")) || [];

    if (watchlaterfunctionality) {
      existingData.push({
        id: `${id}`,
        Name: `${title}`,
        Image: `${Image}`,
        video: `${video}`,
      });
    } else {

     const updatedData = existingData.filter(item =>  item.title === title);
     existingData.pop(updatedData);
    }
    SetWatchlaterfunctionality(!watchlaterfunctionality);
    localStorage.setItem("Myarray", JSON.stringify(existingData));
    localStorage.setItem(storageKey, JSON.stringify(!watchlaterfunctionality));
 
  };
  useEffect(() => {
    // Retrieve the stored value from localStorage on component mount
    const storedFunctionality = JSON.parse(localStorage.getItem(storageKey));
    if (storedFunctionality !== null) {
      SetWatchlaterfunctionality(storedFunctionality);
    }

  }, [storageKey]); // Include storageKey in the dependency array
  

  return (
    <div>
      <button onClick={Watchlater} className="watchlaterbutton">
        {watchlaterfunctionality ? "watch later" : "remove"} 
      
      </button>
    </div>
  );
};

export default Button;
