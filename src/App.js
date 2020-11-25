import React from "react";
import "./styles.css";
import Filter1 from "./components/filter1";
import Filter2 from "./components/filter2";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [filter1, setFilter1] = React.useState({});
  const [filter2, setFilter2] = React.useState({});
  const [filter3, setFilter3] = React.useState({});
  const giveFilterObjToParent = (filterObj) => {
    const newFilterObj = { ...filterObj };
    if (newFilterObj.key === "discount") setFilter1(newFilterObj);
    else if (newFilterObj.key === "brand") setFilter2(newFilterObj);
    else if (newFilterObj.key === "stock_available") setFilter3(newFilterObj);
    filters.push(newFilterObj);
    setFilters(filters);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="filters">
          <Filter1
            filter1={filter1}
            giveFilterObjToParent={giveFilterObjToParent}
          />
          <Filter2
            filter2={filter2}
            giveFilterObjToParent={giveFilterObjToParent}
          />
        </div>
        <div className="products">
          <h2>products</h2>
          {JSON.stringify(filters)}
        </div>
      </div>
    </div>
  );
}
