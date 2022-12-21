import React from 'react';
import Grid from '@mui/material/Grid';
import './styles.scss';

const Empty = ({ title, desc }) => {
  return (
    <Grid container justify='center'>
    <div className='container-empty'>
      <div className='content-empty'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
    </Grid>
  );
};

export default Empty;
