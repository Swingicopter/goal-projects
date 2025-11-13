import React from "react";

function childComponent(props) {
    const style = {
        backgroundColor: props.bgColor,
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "10px"
    };

    return (
        <div style={style}>
            <h3>{props.name}</h3>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    );
}

export default childComponent;