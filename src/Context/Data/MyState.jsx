import React, { useEffect, useReducer, useState } from "react";
import MyContext from "./MyContext";
import { toast } from "react-toastify";
import { ProductData } from "../../ProductData";

export const MyState = (props) => {

  //for iterate the filteration
  const [searchName, setSearchName] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    //validation first
    if (name === "" || address === "" || pincode === "" || phoneNumber === "") {
      return toast.error("all fields are required");
    } else {
      toast.success("order success");
      setTimeout(() => {
        window.location.href = "/";
      },800)
    }
  };
  //set property to remove duplicate item from category
  const [uniqueCategories, setUniqueCategories] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    const categories = ProductData.map((product) => product.category);
    setUniqueCategories(new Set(categories));
  }, [ProductData]);

  // for price
  const [uniquePrice, setUniquePrice] = useState(new Set());
  const [filterPrice, setFilterPrice] = useState("");
  useEffect(() => {
    const Prices = ProductData.map((Product) => Product.price);
    setUniquePrice(new Set(Prices));
  }, [ProductData]);

  //for brand/title
  const [uniqueTitle, setUniqueTitle] = useState(new Set());
  const [filterType, setFilterType] = useState("");
  useEffect(() => {
    const titles = ProductData.map((Product) => Product.title);
    setUniqueTitle(new Set(titles));
  }, [ProductData]);

  //color
  const [uniqueColor, setUniqueColor] = useState(new Set());
  const [colorType, setColorType] = useState("");
  useEffect(() => {
    const colors = ProductData.map((product) => product.color);
    setUniqueColor(new Set(colors));
  }, [ProductData]);

  //nav option
  const [uniqueOption, setUniqueOption] = useState(new Set());
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    const option = ProductData.map((Product) => Product.options);
    setUniqueOption(new Set(option));
  }, [ProductData]);
  return (
    <>
      <MyContext.Provider
        value={{
          searchName,
          setSearchName,
          searchKey,
          setSearchKey,
          filterType,
          setFilterType,
          filterPrice,
          setFilterPrice,
          name,
          address,
          pincode,
          phoneNumber,
          setName,
          setAddress,
          setPincode,
          setPhoneNumber,
          buyNow,
          uniqueCategories,
          setUniqueCategories,
          selectedCategory,
          setSelectedCategory,
          uniquePrice,
          setUniquePrice,
          uniqueTitle,
          setUniqueTitle,
          uniqueColor,
          setUniqueColor,
          colorType,
          setColorType,
          uniqueOption,
          setUniqueOption,
          selectedOption,
          setSelectedOption,
        }}
      >
        {props.children}
      </MyContext.Provider>
      ;
    </>
  );
};
