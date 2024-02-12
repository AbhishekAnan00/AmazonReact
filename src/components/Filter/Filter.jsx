import React, { useContext, useEffect, useState } from "react";
import "./Filter.css";
import MyContext from "../../Context/Data/MyContext";
import { GiCheckMark } from "react-icons/gi";

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
    selectedCategory,
    setSelectedCategory,
    uniqueCategories,
    uniquePrice,
    uniqueTitle,
    uniqueColor,
    colorType,
    setColorType,
  } = Context;

  //color
  const [filterColor, setFilterColor] = useState(uniqueColor[0]);

  //reset button/filter

  const handleResetFilter = () => {
    setColorType("");
    setFilterPrice("");
    setFilterType("");
    setSelectedCategory("");
    setSearchKey("");
    setFilterColor("");
  };
  return (
    <>
      <div
        className="filter"
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
          {/* category */}
          <div
            value={selectedCategory}
            onClick={(e) => setSelectedCategory(e.target.value)}
            className="category_filter"
          >
            <h3>Category</h3>
            {[...uniqueCategories].map((category, index) => (
              <button key={index} value={category} className="category_btn">
                {category}
              </button>
            ))}
          </div>

          {/* title/brand */}
          <h3 className="heading_filter">Company</h3>
          <select
            className="filter-select"
            name="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {[...uniqueTitle].map((title, index) => (
              <option value={title} key={index}>
                {title}
              </option>
            ))}
          </select>
          {/* price */}
          <h3 className="heading_filter">Price</h3>
          <select
            className="filter-select"
            name="filterPrice"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          >
            {[...uniquePrice].map((price, index) => (
              <option value={price} key={index}>
                {price}
              </option>
            ))}
          </select>
          {/* color */}
          <div
            name="colorType"
            value={colorType}
            onClick={(e) => setColorType(e.target.value)}
          >
            <h3 className="heading_fiter">Colors</h3>
            {[...uniqueColor].map((color, index) => (
              <button
                key={index}
                style={{
                  backgroundColor: color,
                  padding: "10px",
                  margin: "5px",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "3px 4px 5px 0px",
                  color: "white",
                }}
                value={color}
                onClick={() => setFilterColor(color)}
              >
                {filterColor === color ? <GiCheckMark /> : null }
              </button>
            ))}
          </div>
        </div>
        <div>
          <button className="reset-btn" onClick={handleResetFilter}>
            Reset Filter
          </button>
        </div>
      </div>
    </>
  );
};
