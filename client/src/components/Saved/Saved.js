import React from "react";

const Saved = props => (
  
  <div className="card mb-3">
  <div className="card-header text-center" style={{paddingBottom: '20px'}}><h2>Saved Articles</h2></div>
  <ul className="list-group-item" style={{maxHeight: 225,
          marginBottom: 10,
          overflow: "scroll"
        }}>
   {props.children}
   </ul>
</div>

);

export default Saved
