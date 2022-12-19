// material
import {
  Breadcrumbs,
  Card,
  Link,
  Container,
  Divider,
  Typography,
  Stack,
} from "@mui/material";

import {
  List,
  AddData,
  FilterData,
  Header,
  Empty,
  DialogFilter,
} from "../components";

import { getData } from "../helpers/actions";
// import { useGetCity, useGetSize } from "../hooks";
import React, { useState, useEffect } from "react";

import "./styles.scss";

import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------

export default function ChannelManagement() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [size, setSize] = useState("");
  const [hasFilter, setHasFilter] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (params = null) => {
    try {
      setLoading(true);
      const data = await getData(params);

      if (data) {
        const newData = Array.from(new Set(data.map((i) => i.id)))
          .filter((i) => i)
          .map((i) => data.find((item) => item.id === i));

        await setData(newData);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitSearch = (value) => {
    handleFilterReset(false);
    if (value.length > 0) {
      fetchData({ search: { komoditas: value } });
    } else {
      fetchData();
    }
  };

  const closeModalAdd = () => {
    setShowModalAdd(false);
  };

  const handleFilterReset = () => {
    setSize("");
    setCity("");
    if (hasFilter) {
      setHasFilter(false);
      fetchData();
    }
  };

  return (
    <>
      <Container sx={{ mt: -5 }} maxWidth={false}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" component={RouterLink} color="inherit" to="/">
            Dashboard
          </Link>
        </Breadcrumbs>
        <Card sx={{ mt: 2, px: 2, boxShadow: 2 }} variant="outlined">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack>
              <Typography variant="h6" sx={{ mt: 4 }}>
                List Daftar Ikan
              </Typography>
              <Typography variant="caption" sx={{ mb: 1 }}>
                Daftar ikan yang tersedia dan dikelola dengan baik oleh tim
                Efishery
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <AddData isVisible={showModalAdd} handleClose={closeModalAdd} />
              <DialogFilter
                isVisible={showModalAdd}
                handleClose={closeModalAdd}
              />
            </Stack>
          </Stack>
          <Divider sx={{ mb: 2 }} />
          {/* <ChannelList sx={{ mb: 2 }} /> */}
          <Stack width="200" sx={{ px: 2 }}>
            <Header
              search={search}
              setSearch={setSearch}
              onSearch={onSubmitSearch}
            />
          </Stack>
          <List list={data} loading={loading} />
          {!loading && data.length === 0 && (
            <Empty
              title="Data belum tersedia"
              desc="Data yang Anda cari tidak ada atau belum tersedia saat ini, silahkan isi data baru terlebih dahulu."
            />
          )}
        </Card>
      </Container>
    </>
  );
}
