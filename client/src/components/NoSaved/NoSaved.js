import React from "react"

//Diplays no results in lists when no results returned
const NoSaved = () => (
  <li className="list-group-item list-group-item-action" style={{marginBottom: 5}}>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="text-center">No Saved Articles to Display</h5>
    </div>
  </li> 
);

export default NoSaved;