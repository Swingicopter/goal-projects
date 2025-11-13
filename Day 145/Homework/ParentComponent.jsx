import React from "react";
import ChildComponent from "./ChildComponent";

function parentComponent() {
    return (
        <div>
            <ChildComponent name="Alice" age="25" city="Paris" bgColor="lightblue" />
            <ChildComponent name="Bob" age="32" city="Tokyo" bgColor="lightcoral" />
        </div>
    );
}

export default parentComponent