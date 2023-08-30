import React from "react";
import ReactDOM from "react-dom/client";

(function(){
    let heading = React.createElement("h1",{},"Hello World With React");
    console.log(heading)

    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);


    heading = React.createElement("h1",{},"Hello World With React, Root 2");
    console.log(heading)

    root = ReactDOM.createRoot(document.getElementById('root-2'));
    root.render(heading);
})()
