import React from "react";
// import CardImage from "../../assets/efishery-logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { theme } from "@mui/material/styles";
import { capitalize } from "lodash";
import { FormatRupiah } from "../../utils/currency";
import "./styles.scss";

const CardItem = ({ item, loading }) => {
  return (
    <>

      <div className="container-card">
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
            {/* <Stack direction="row">
              <LocationOnIcon sx={{ color: "red" }} />
              <Typography>
                {`${(item?.areaKota && capitalize(item?.areaKota)) || ""}` ||
                  "jakarta"}
              </Typography>
            </Stack> */}

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
    </>
  );
};

export default CardItem;
