import React, {useState} from "react";

const Temperature = () =>{
    
    const [temperature, setTemperature] = useState(19)
    const Up = () => {
        setTemperature(temperature + 1)
    }  
    const Down = () => {
        setTemperature(temperature - 1)
    }  

    return (
    <div className="container">
      <h2>The Temperature is: {temperature}</h2>
      <p>
        {
            temperature > 24 ? "It's Hot" : "It's Cold"
        }
      </p>
      <button className="btn btn-success btn-block" onClick={Up}>Up temperature</button>
      <button className="btn btn-warning btn-block" onClick={Down}>Down temperature</button>
    </div>
  )
}

export default Temperature;