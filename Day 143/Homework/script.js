import React from "react";
import ReactDOM from 'react-dom/client';


let header = (<header id="header"> <h1> My React App </h1> </header>);
let app = (<main id="app">
    <div id="content">
        Welcome to my React App. This is my React App and I created my React App to learn how to make React Apps. Eat Grilled Chicken
    </div>
</main>);
let footer = (<footer><h3>Have a nice day!</h3></footer>);

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(header)
root.render(app)
root.render(footer)