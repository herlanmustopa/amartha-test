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
import { getAnime } from "../../hooks/actions";


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
const provinsi = [
  {
    value: "ACEH",
    label: "Aceh",
  },
  {
    value: "BALI",
    label: "Bali",
  },
  {
    value: "BANTEN",
    label: "Banteng",
  },
  {
    value: "DKI JAKARTA",
    label: "Dki Jakarta",
  },
  {
    value: "JAWA BARAT",
    label: "Jawa Barat",
  },
  {
    value: "JAWA TENGAH",
    label: "Jawa Tengah",
  },
  {
    value: "JAWA TIMUR",
    label: "Jawa Timur",
  },
  {
    value: "KALIMANTAN TIMUR",
    label: "Kalimantan Timur",
  },
  {
    value: "LAMPUNG",
    label: "Lampung",
  },
  {
    value: "SULAWESI BARAT",
    label: "Sulawesi Barat",
  },
  {
    value: "SUMATERA BARAT",
    label: "Sumatera Barat",
  },
  {
    value: "SUMATERA UTARA",
    label: "Sumatera Utara",
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
      const data = await getAnime(params);

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
                  options={provinsi}
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
