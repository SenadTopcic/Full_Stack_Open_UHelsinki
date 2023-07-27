

const Filter = (props) => {
  return (
    <form>
      <strong>filter shown with </strong>
      <input 
      value={props.searchName}
      onChange={(e) => props.handleSearchName(e)}
      />
    </form>
  );
};
export default Filter;
