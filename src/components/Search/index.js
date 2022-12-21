import { Autocomplete } from "@mui/material/";
import TextField from "@mui/material/TextField";
import * as React from "react";

const Search = ({ setSearch, onSearch }) => {
  const handleChange = async (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  const handleClickTag = async (event) => {
    setSearch(event.target.textContent);
    onSearch(event.target.textContent);
  };
  const Anime = ["Naruto", "Trigun", "One Piece", "Zipang"];
  return (
    <Autocomplete
      freeSolo
      sx={{ mr: 2 }}
      fullWidth
      size="small"
      id="search komoditas"
      disableClearable
      options={Anime.map((name) => name)}
      onChange={handleClickTag}
      onInputChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Anime"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

export default Search;
