import React from "react";

const Results = props => (
  
  <div className="container">
  <h2>Results</h2>
  <li className="list-group-item">
   {props.children}
   </li>
</div>

);

export default Results
