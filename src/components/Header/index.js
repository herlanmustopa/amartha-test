/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Search from "../Search";
import "./styles.scss";

const Header = (props) => {
  const { search, setSearch, onSearch } = props;

  return <Search search={search} setSearch={setSearch} onSearch={onSearch} />;
};

export default Header;
