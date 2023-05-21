
const SortBy = ({ onSort }) => {
  const handleChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">Sort By :</label>
      <select className="form-select" onChange={handleChange}>
        <option value="">None</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default SortBy;
