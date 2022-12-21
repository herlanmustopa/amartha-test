import React, { useEffect, useState } from "react";

import {
  Autocomplete,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

// import { getData, addData } from "../../helpers/actions";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

// icon
import CancelIcon from "@mui/icons-material/Cancel";
import FilterListIcon from "@mui/icons-material/FilterList";
// import { getData, addData } from "../../helpers/actions";
// import { useGetCity, useGetSize } from "../../hooks";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#16a085",
  "&:hover": {
    backgroundColor: "#16a085",
  },
}));
const DialogFilter = () => {
  const [open, setOpen] = React.useState(false);
  // const { fetchGetCities, cities } = useGetCity();
  // const { fetchGetSizes, sizes } = useGetSize();
  const [city, setCity] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);
  const [data, setData] = useState([]);
  const [scroll, setScroll] = React.useState("paper");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (params = null) => {
    try {
      setLoading(true);
      // const data = await getData(params);

      // if (data) {
      //   const newData = Array.from(new Set(data.map((i) => i.id)))
      //     .filter((i) => i)
      //     .map((i) => data.find((item) => item.id === i));

      //   await setData(newData);
      //   setLoading(false);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
    openModalFilter();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const openModalFilter = async () => {
    // await fetchGetSizes();
    // await fetchGetCities();
  };
  const closeModalFilter = () => {
    setShowModalFilter(false);
  };
  const handleFilter = async () => {
    let data = {};

    if (city) {
      data = { ...data, area_kota: city };
    }

    if (size) {
      data = { ...data, size: size };
    }

    fetchData({ search: data });
    closeModalFilter();
    setHasFilter(true);
  };

  const handleFilterReset = () => {
    setSize("");
    setCity("");
    if (hasFilter) {
      setHasFilter(false);
      fetchData();
    }
    setOpen(false);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <ColorButton
        onClick={handleClickOpen}
        size="small"
        variant="outlined"
        endIcon={<FilterListIcon />}
      >
        Filter
      </ColorButton>

      <Dialog fullWidth="true" open={open}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <DialogTitle alignItems="center">Filter Data Ikan</DialogTitle>
          <DialogTitle alignItems="center">
            <IconButton aria-label="expand row" size="small">
              <CancelIcon onClick={handleClose} sx={{ color: "red" }} />
            </IconButton>
          </DialogTitle>
        </Stack>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText>
            <Stack>
              <FormControl fullWidth>
                <InputLabel id="size-label">Ukuran</InputLabel>
                <Select
                  labelId="size-label"
                  id="size-select"
                  placeholder="Pilih Ukuran"
                  height={"80%"}
                  value={size}
                  label="Ukuran"
                  onChange={handleChangeSize}
                >
                  {/* {sizes &&
                    sizes.length > 0 &&
                    sizes.map((item, key) => (
                      <MenuItem value={item?.size}>{item?.size}</MenuItem>
                    ))} */}
                </Select>
              </FormControl>
            </Stack>
            <Stack sx={{ mt: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="city-label">Kota</InputLabel>
                <Select
                  labelId="city-label"
                  id="city-select"
                  placeholder="Pilih Lokasi"
                  value={city}
                  label="Kota"
                  onChange={handleChangeCity}
                >
                  {/* {cities &&
                    cities.length > 0 &&
                    cities.map((item, key) => (
                      <MenuItem value={item?.value}>{item?.label}</MenuItem>
                    ))} */}
                </Select>
              </FormControl>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <DialogActions>
            <Button sx={{ color: "red" }} onClick={handleFilterReset}>
              Batalkan
            </Button>
          </DialogActions>
          <DialogActions>
            <Button onClick={handleFilter}>Save</Button>
          </DialogActions>
        </Stack>
        {/* <DialogActions>
          <Button onClick={handleFilter}>Save</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

export default DialogFilter;
