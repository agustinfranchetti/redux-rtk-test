import React from "react";

const Pokemon =(props) => {
    return  <div>
        ----------------------------
        <h4>name: {props.name}</h4>
        <h5>url: {props.url}</h5>
    </div>
}

export default Pokemon;