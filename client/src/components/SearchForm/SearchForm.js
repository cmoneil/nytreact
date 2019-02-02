import React from "react";

const SearchForm = props => (
  <div className="card mb-3">
  <form onSubmit={props.handleSubmit}>
    <div className="form-group">
     <div className="card-header text-center"><label htmlFor="search"><h2>Search</h2></label></div>
     <div className="p-3">
      <input style={{ marginBottom: 5}}
        onChange={props.handleTopicChange}
        value={props.topic}
        name="topic"
        type="text"
        className="form-control"
        placeholder="Search For an Article"
        id="search"
      />
      <input style={{ marginBottom: 5 }}
        onChange={props.handleStartChange}
        value={props.startYear}
        name="startYear"
        type="text"
        className="form-control"
        placeholder="Start Year"
        id="search"
      />
      <input
        onChange={props.handleEndChange}
        value={props.endYear}
        name="endYear"
        type="text"
        className="form-control"
        placeholder="End Year"
        id="search"
      />
      <br/>
      <button
        className="btn btn-primary"
        type="submit">Search
            </button>
    </div>
    </div>
  </form>
  </div>
);

export default SearchForm;
