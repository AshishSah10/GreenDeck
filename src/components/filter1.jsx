import React from "react";

export default function Filter1(props) {
  const [display, setDisplay] = React.useState(false);
  const handleFilterClick = () => {
    setDisplay(!display);
  };
  const giveFilterObjToParent = props.giveFilterObjToParent;
  const handleApply = () => {
    const discount = document.getElementById("discount").value;
    const operator = document.getElementById("operator").value;
    const filterObj1 = {
      key: "discount",
      value: discount,
      operator: operator
    };
    giveFilterObjToParent(filterObj1);
  };
  return (
    <div className="Filter1">
      <button onClick={handleFilterClick}>filter1: discount</button>
      {display && (
        <>
          <label for="discount">Discount</label>
          <input
            id="discount"
            name="discount"
            type="number"
            min="0"
            max="100"
          />
          <label for="operator">Choose a operator:</label>
          <select id="operator" name="operator">
            <option value="less_than">Less than</option>
            <option value="greater_than">Greater than</option>
            <option value="equal">Equal</option>
          </select>
          <button onClick={handleApply}>Apply</button>
        </>
      )}
    </div>
  );
}
