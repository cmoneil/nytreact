import React from "react";

const SearchForm = props => (
  
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={props.handleTopicChange}
              value={props.topic}
              name="topic"
              type="text"
              className="form-control"
              placeholder="Search For an Article"
              id="search"
            />
            <input
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
            <br />
            <button
              className="btn btn-primary"
              type="submit">Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

);

export default SearchForm;
