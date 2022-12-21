// material
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Breadcrumbs,
  Card, Container,
  Divider, Link, PaginationItem, Stack, Typography
} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import usePagination from "./Pagination";

import {
  AddData, Empty,
  Header, List
} from "../components";

import { getData } from "../helper/actions";
// import { useGetCity, useGetSize } from "../hooks";
import React, { useEffect, useState } from "react";

import "./styles.scss";

import { Link as RouterLink } from "react-router-dom";

// ----------------------------------------------------------------------

export default function ChannelManagement() {
  const [data, setData] = useState([]);
  const [paginations, setPagintions] = useState("");
  const [perPage, setPerpage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [size, setSize] = useState("");
  const [hasFilter, setHasFilter] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  let [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();

  }, []);


  const fetchData = async (params = null) => {
    try {
      setLoading(true);
      const data = await getData(params);
      console.log(data);

      if (data) {
        const newData = Array.from(new Set(data.data.map((i) => i.mal_id)))
          .filter((i) => i)
          .map((i) => data.data.find((item) => item.mal_id === i));

        console.log(newData.length);

        await setData(newData);
        setPagintions(data.pagination.items.total);
        setPerpage(data.pagination.items.per_page);
        setPage(data.pagination.current_page);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitSearch = (value) => {
    handleFilterReset(false);
    if (value.length > 0) {
      fetchData({ search: { title: value } });
    } else {
      fetchData();
    }
  };


  const handleFilterReset = () => {
    setSize("");
    setCity("");
    if (hasFilter) {
      setHasFilter(false);
      fetchData();
    }
  };

  const count = Math.ceil(data.length / perPage);
  const _DATA = usePagination(data, perPage);


  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
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
                Daftar Anime yang tersedia...
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              {/* <AddData isVisible={showModalAdd} handleClose={closeModalAdd} /> */}
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
          {/* {_DATA.currentData().map((item, index) => {

            return <div key={item}>
            </div>
          })} */}
          <List list={data} loading={loading} />
          {!loading && data.length === 0 && (
            <Empty
              title="Data belum tersedia"
              desc="Data yang Anda cari tidak ada atau belum tersedia saat ini, silahkan isi data baru terlebih dahulu."
            />
          )}
          <Stack spacing={2}>
            <Pagination
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange} />
          </Stack>
        </Card>
      </Container>
    </>
  );
}
