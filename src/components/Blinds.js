import React, { useState } from "react";
import Blind from "./Blind"

const Blinds = (props) => {
   const blinds= props.blindDefaultArray;
    if( blinds.length > 0 ){
        return (
            <div>
              {blinds.map((el) => (
               <Blind key= {el.id} blind = {el}/>
              ))}
            </div>
          );
    }
    return ( <div className="blind">
        <h3>No blind present</h3>
    </div>)

};

export default Blinds;
