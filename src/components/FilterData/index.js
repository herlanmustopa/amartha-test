/* eslint-disable eqeqeq */
// import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { getData, addData } from "../../helpers/actions";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

// icon
import CancelIcon from "@mui/icons-material/Cancel";
import FilterListIcon from "@mui/icons-material/FilterList";

import React from "react";

import {
  IconButton,
  Stack,
  TextField,
  Autocomplete,
  Snackbar,
} from "@mui/material";

const ukuran = [
  {
    value: "30",
    label: "30",
  },
  {
    value: "40",
    label: "40",
  },
  {
    value: "50",
    label: "50",
  },
  {
    value: "60",
    label: "60",
  },
  {
    value: "70",
    label: "70",
  },
  {
    value: "80",
    label: "80",
  },
  {
    value: "90",
    label: "90",
  },
  {
    value: "100",
    label: "100",
  },
  {
    value: "110",
    label: "110",
  },
  {
    value: "120",
    label: "120",
  },
  {
    value: "130",
    label: "130",
  },
  {
    value: "140",
    label: "140",
  },
  {
    value: "150",
    label: "150",
  },
  {
    value: "160",
    label: "160",
  },
  {
    value: "170",
    label: "170",
  },
  {
    value: "180",
    label: "180",
  },
  {
    value: "190",
    label: "190",
  },
  {
    value: "200",
    label: "200",
  },
];

const kota = [
  {
    value: "ACEH KOTA",
    label: "Aceh Kota",
  },
  {
    value: "BULELENG",
    label: "Buleleng",
  },
  {
    value: "PANDEGLANG",
    label: "Pandelang",
  },
  {
    value: "KOTA TUA",
    label: "Kota Tua",
  },
  {
    value: "BANDUNG",
    label: "Bandung",
  },
  {
    value: "CIREBON",
    label: "Cirebon",
  },
  {
    value: "PEMALANG",
    label: "Pemalang",
  },
  {
    value: "CILACAP",
    label: "Cilacap",
  },
  {
    value: "PURWOREJO",
    label: "Purworejo",
  },
  {
    value: "TEGAL",
    label: "Tegal",
  },
  {
    value: "JEMBER",
    label: "Jember",
  },
  {
    value: "BANYUWANGI",
    label: "Banyuwangi",
  },
  {
    value: "SITUBONDO",
    label: "Situbondo",
  },
  {
    value: "PROBOLINGGO",
    label: "Probolinggo",
  },
  {
    value: "BORNEO",
    label: "Borneo",
  },
  {
    value: "LAMPUNG TIMUR",
    label: "Lampung Timur",
  },
  {
    value: "MAMUJU UTARA",
    label: "Mamuju Utara",
  },
  {
    value: "PADANG PARIAMAN",
    label: "Padang Pariaman",
  },
  {
    value: "MEDAN",
    label: "Medan",
  },
  {
    value: "DEPOK",
    label: "Depok",
  },
  {
    value: "CIMAHI",
    label: "Cimahi",
  },
];
const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#16a085",
  "&:hover": {
    backgroundColor: "#16a085",
  },
}));
class FilterData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setOpen: false,
      setScroll: false,
      showSnackbar: false,
      scroll: "paper",
      age: "",
      Komoditas: "",
      Harga: "",
      Provinsi: "",
      Kota: "",
      Ukuran: "",
      Tanggal: "",
      data: [],
      message: "",

      modSuccess: false,
      modFailed: false,
    };
  }

  // openModalFilter = async () => {
  //   setShowModalFilter(true);
  //   await fetchGetCities();
  //   await fetchGetSizes();
  // };

  handleClickOpen = () => () => {
    this.setState({ setOpen: true });
  };
  closeModalAdd = () => {
    this.setState({ setOpen: false });
  };
  handleClose = () => {
    this.setState({
      setOpen: false,
    });
  };

  render() {
    return (
      <>
        <ColorButton
          onClick={this.handleClickOpen()}
          size="small"
          variant="outlined"
          endIcon={<FilterListIcon />}
        >
          Filter
        </ColorButton>

        <Snackbar
          open={this.state.showSnackbar}
          autoHideDuration={6000}
          // message={this.state.message}
          // onClose={() => setShowSnackbar(false)}
        >
          <Alert elevation={6} variant="filled" severity="success">
            {this.state.message}
          </Alert>
        </Snackbar>

        <Dialog fullWidth="true" open={this.state.setOpen}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <DialogTitle alignItems="center">Filter Data Ikan</DialogTitle>
            <DialogTitle alignItems="center">
              <IconButton aria-label="expand row" size="small">
                <CancelIcon onClick={this.handleClose} sx={{ color: "red" }} />
              </IconButton>
            </DialogTitle>
          </Stack>
          <DialogContent dividers={this.state.scroll === "paper"}>
            <DialogContentText>
              <Stack>
                <Autocomplete
                  sx={{ my: 1 }}
                  value={this.value}
                  disablePortal
                  id="combo-box-demo"
                  options={ukuran}
                  getOptionLabel={(option) => option.label}
                  onSelect={(event) => {
                    this.setState({
                      Ukuran: event.target.value,
                    });
                  }}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Ukuran"
                      fullWidth
                      name="role"
                    />
                  )}
                />
              </Stack>
              <Stack>
                <Autocomplete
                  sx={{ my: 1 }}
                  value={this.value}
                  disablePortal
                  id="combo-box-demo"
                  options={kota}
                  getOptionLabel={(option) => option.label}
                  onSelect={(event) => {
                    this.setState({
                      Kota: event.target.value,
                    });
                  }}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Kota"
                      // size="small"
                      fullWidth
                      name="role"
                    />
                  )}
                />
              </Stack>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmitAdd}>Save</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default FilterData;
