import { useState } from "react";

const SearchBy = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        value={query}
        placeholder="Search your movies & tv shows"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBy;
