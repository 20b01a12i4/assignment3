import React from "react";
import ReactDOM from "react-dom";
import  Buttons from "./Buttons.jsx";
import Cards from "./Cards.jsx";

const App=()=>{
    return(
        <>
          <Buttons>
              <Cards/>
            </Buttons>
        </>
    );
};

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById("root")
);