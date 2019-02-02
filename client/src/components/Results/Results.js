import React from "react";

const Results = props => (

  <div className="card mb-5">
    <div className="card-header text-center"><h2>Results</h2></div>
    <ul className="list-group-item" style={{
      maxHeight: 400,
      marginBottom: 10,
      overflow: "scroll"
    }}>
      {props.children}
    </ul>
  </div>


);

export default Results
