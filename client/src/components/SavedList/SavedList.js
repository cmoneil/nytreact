import React from "react"

const SavedList = props => (
<ul className="list-group-item" style={{marginBottom: 5}}>
    <h4>{props.title}</h4>
    <p>{props.snippet}</p>
        <a href={props.url} target="_blank">
          <button className="btn btn-danger" style={{marginRight: 5}}>View Article</button>
        </a>
        <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
    <p>Date Published: {props.date}</p>
</ul>
);

export default SavedList;