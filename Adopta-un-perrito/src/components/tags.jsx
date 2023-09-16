import React from "react";

function tags(props){
    return (
        <button className={`btn btn-${props.color}`} type="button">{props.text}</button>
    );
}

export default tags;

