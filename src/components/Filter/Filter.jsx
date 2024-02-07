import React, { useContext } from "react";
import "./Filter.css";
import MyContext from "../../Context/Data/MyContext";
import { ProductData } from "../../ProductData";

export const Filter = () => {
  const Context = useContext(MyContext);
  const {
    mode,
    searchKey,
    setSearchKey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = Context;

  return (
    <>
      <div
        className="filter"
        style={{ backgroundColor: mode === "dark" ? "grey" : "" }}
      >
        <h1>Filter</h1>
        <input
          className="filter-input"
          type="text"
          placeholder="search product"
          name="searchKey"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className="filter-section">
          <select
            className="filter-select"
            name="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {ProductData.map((item)=>{
              return <option>{item.category}</option>
            })}
          </select>

          <select
            className="filter-select"
            name="filterPrice"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          >
            {ProductData.map((item, k) => {
              return <option >{item.price}</option>;
            })}
          </select>
        </div>
        <div>
          <button className="reset-btn">Reset Filter</button>
        </div>
      </div>
    </>
  );
};
