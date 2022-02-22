import React from "react";

export default function Search(props) {
  const { value, handleSearch } = props;

  return (
    <div className="input-group mb-5">
      <input
        type="search"
        value={value}
        className="form-control"
        placeholder="Search..."
        name="search"
        onChange={handleSearch}
      />
      <button type="submit" className="btn btn-primary">
        <i className="fas fa-search" />
      </button>
    </div>
  );
}
