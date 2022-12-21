import {
  Autocomplete, Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack, TextField, Typography
} from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import "./styles.scss";

import { Icon } from '@iconify/react';
import CancelIcon from "@mui/icons-material/Cancel";
import YouTubeIcon from '@mui/icons-material/YouTube';


import { getDataById } from "../../helper/actions";



const CardItem = ({ item, loading, onclick }) => {

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [streaming, setStreaming] = React.useState([]);

  const closeModalAdd = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    getDataById(item.mal_id).then((res) => {
      // console.log(res.data);
      setStreaming(res.data.streaming);
    });
  };


  return (
    <>
      <div className="container-card" onClick={handleClickOpen} >
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={40}
          />
        ) : (
          <div className="header-card ">
            <p> {item?.score || ""}</p>
          </div>
        )}
        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={150}
            style={{ marginBottom: 6 }}
          />
        ) : (
          <div className="content">
            <img src={item.images.jpg.large_image_url} alt={item.images} height="200px" width="200px" />
          </div>
        )}
        {loading ? (
          <Skeleton
            animation="wave"
            variant="text"
            width={"100%"}
            height={40}
            style={{ marginBottom: 6 }}
          />
        ) : (
          <Stack
            className="desc"
            direction="row"
            justifyContent="space-between"
          >

            <Typography>{item?.rating || 0}</Typography>
          </Stack>
        )}

        {loading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={"100%"}
            height={40}
          />
        ) : (
          <div className="footer-card ">
            <p> {item?.title}</p>
          </div>
        )}
      </div>


      <Dialog
        fullWidth="true"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Stack
          direction="row"
          justifyItems="flex-start"
          justifySelf="flex-start"
          // alignItems="start"
          justifyContent="flex-start"
        >
          <DialogTitle id="scroll-dialog-title" alignItems="center">
            <div className="content">
              <img src={item?.images.jpg.large_image_url} alt={item?.images} height="200px" width="200px" style={{
                borderRadius: "10px",
                // objectFit: "cover",

              }} />
            </div>
          </DialogTitle>
          <Stack direction="column"
            justifyItems="flex-start"
            justifySelf="flex-start"
            // alignItems="start"
            justifyContent="flex-start">
            <Stack style={{
              marginTop: "10px",
            }}>
              <Typography style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",


              }}>
                {item?.title}
              </Typography>
            </Stack>
            <Stack
              justifyContent="flex-start">
              <Typography>
                {item?.rating}
              </Typography>
            </Stack>
            <Stack direction="row"
              // alignItems="start"
              justifyContent="space-between"
              style={{
                marginRight: "20px",
                marginTop: "20px",
              }}
            >
              <Typography>
                {item?.score}
              </Typography>
              <Typography>
                {item?.year}
              </Typography>
              <Typography>
                {item?.episodes} espisodes
              </Typography>
            </Stack>
            <Stack
              justifyContent="flex-start">
              <Typography style={{
                color: "black",
                fontSize: "15px",
                // fontWeight: "bold",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                marginRight: "20px",
                marginTop: "20px",

              }}>
                {item?.synopsis}
              </Typography>
            </Stack>
          </Stack>
          {/* <DialogTitle id="scroll-dialog-title" alignItems="center">
            <IconButton aria-label="expand row" size="small">
              <CancelIcon onClick={handleClose} sx={{ color: "red" }} />
            </IconButton>
          </DialogTitle> */}
        </Stack>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Stack direction="row"
              // alignItems="start"
              justifyContent="space-evenly">
              <Stack direction="column"
                alignItems="center">
                <a href={item?.trailer.url} target="_blank">
                  <IconButton aria-label="expand row" size="large">
                    <YouTubeIcon sx={{ color: "red" }} />
                  </IconButton>
                </a>
                <Typography>
                  Trailer
                </Typography>
              </Stack>
              {streaming.map((item) => {
                return (
                  <Stack direction="column"
                    alignItems="center">
                    <a href={item.url} target="_blank" >
                      <IconButton aria-label="expand row" size="large">
                        {item.name === "Netflix" ? <Icon icon="mdi:netflix" sx={{ color: "red" }} /> : item.name === "Crunchyroll" ? <Icon icon="simple-icons:crunchyroll" color="#f25" /> : item.name === "Funimation" ? <Icon icon="simple-icons:funimation" color="#f25" /> : item.name === "Shahid" ? <Icon icon="arcticons:shahid" color="#16a085" /> : item.name === "Tubi TV" ? <Icon icon="simple-icons:tubi" color="#f25" /> : null}
                      </IconButton>
                    </a>
                    <Typography>
                      {item.name}
                    </Typography>
                  </Stack>
                )
              })}

            </Stack>

            <Stack style={{ marginTop: "20px" }}>
              <Typography>
                <b>Duration : </b> {item?.duration}
              </Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardItem;
