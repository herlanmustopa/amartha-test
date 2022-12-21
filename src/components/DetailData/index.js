/* eslint-disable eqeqeq */
// import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { getData, getDataById } from "../../helper/actions";



// icon
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
// import checkmarkFill from "@iconify/icons-eva/checkmark-fill";
// import closeFill from "@iconify/icons-eva/close-fill";

import moment from "moment";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  Autocomplete, IconButton, Snackbar, Stack,
  TextField
} from "@mui/material";
// import { getAnime } from = actions();



const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#16a085",
  "&:hover": {
    backgroundColor: "#16a085",
  },
}));
class AddData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: [ukuran],
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

  addComponent = () => () => {
    this.setState({
      setOpenEdit: true,
      loadingEdit: true,
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async (params = null) => {
    try {
      const data = await getData(params);

      if (data) {
        const newData = Array.from(new Set(data.map((i) => i.id)))
          .filter((i) => i)
          .map((i) => data.find((item) => item.id === i));

        await this.setState(data[newData]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <>
        <ColorButton
          sx={{ mr: 2 }}
          underline="none"
          onClick={this.handleClickOpen()}
          size="small"
          variant="contained"
          endIcon={<AddIcon />}
        >
          Tambah Data Ikan Baru
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

        <Dialog
          fullWidth="true"
          open={this.state.setOpen}
          // onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              Masukan Data Ikan
            </DialogTitle>
            <DialogTitle id="scroll-dialog-title" alignItems="center">
              <IconButton aria-label="expand row" size="small">
                <CancelIcon onClick={this.handleClose} sx={{ color: "red" }} />
              </IconButton>
            </DialogTitle>
          </Stack>
          <DialogContent dividers={this.state.scroll === "paper"}>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Stack>
                <TextField
                  sx={{ my: 1 }}
                  fullWidth
                  label="Komoditas"
                  id="fullWidth"
                  // size="small"
                  onChange={(event) => {
                    this.setState({
                      Komoditas: event.target.value,
                    });
                  }}
                />

                <Autocomplete
                  sx={{ my: 1 }}
                  value={this.value}
                  disablePortal
                  id="combo-box-demo"
                  // options={ukuran}
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
                      // size="small"
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
                  // options={provinsi}
                  getOptionLabel={(option) => option.label}
                  onSelect={(event) => {
                    this.setState({
                      Provinsi: event.target.value,
                    });
                  }}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Provinsi"
                      // size="small"
                      fullWidth
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
                  // options={kota}
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

              <TextField
                sx={{ my: 1 }}
                fullWidth
                autoComplete="value"
                type="text"
                label="Harga"
                onChange={(event) => {
                  this.setState({
                    Harga: event.target.value,
                  });
                }}
              />
              <TextField
                sx={{ my: 1 }}
                fullWidth
                autoComplete="value"
                type="date"
                label=""
                onChange={(event) => {
                  this.setState({
                    Tanggal: event.target.value,
                  });
                }}
              />
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

export default AddData;
