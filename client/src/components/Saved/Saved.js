import React from "react";

const Saved = props => (
  
  <div className="container">
  <h2>Saved Articles</h2>
  <li className="list-group-item">
   {props.children}
   </li>
</div>

);

export default Saved
