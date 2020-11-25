import React from "react";

export default function Filter2(props) {
  const [display, setDisplay] = React.useState(false);
  const handleFilterClick = () => {
    setDisplay(!display);
  };
  const giveFilterObjToParent = props.giveFilterObjToParent;
  const handleApply = () => {
    const brand = document.getElementById("brand").value;
    const filterObj2 = {
      key: "brand",
      value: brand,
      operator: "equals"
    };
    giveFilterObjToParent(filterObj2);
  };
  return (
    <div className="Filter2">
      <button onClick={handleFilterClick}>filter2: brand</button>
      {display && (
        <>
          <label for="discount">Discount</label>
          <input id="brand" name="brand" type="text" />
          <button onClick={handleApply}>Apply</button>
        </>
      )}
    </div>
  );
}
