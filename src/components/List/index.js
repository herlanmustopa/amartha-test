import Grid from "@mui/material/Grid";
import React from "react";
import CardItem from "../CardItem";

const List = (props) => {
  const { list, loading } = props;

  return (
    <Grid
      container
      justify="center"
      sx={{ p: 2 }}
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {!loading
        ? list &&
        list.map((item) => (
          <Grid container item xs={2} sm={4} md={3} key={item.mal_id}>
            <CardItem item={item} loading={loading} />
          </Grid>
        ))
        : Array.apply(0, Array(12)).map(function (x, i) {
          return (
            <Grid container item xs={2} sm={4} md={3} key={i}>
              <CardItem loading={loading} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default List;
