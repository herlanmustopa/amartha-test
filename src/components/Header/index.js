/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Search from "../Search";
import "./styles.scss";

const Header = (props) => {
  const { search, setSearch, onSearch, options } = props;

  return <Search search={search} setSearch={setSearch} onSearch={onSearch} options={options} />;
};

export default Header;
