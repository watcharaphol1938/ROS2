import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { UsersInterface } from "../models/IUser";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Divider, Drawer, FormControl, FormHelperText, Grid, IconButton, InputAdornment, LinearProgress, LinearProgressProps, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, OutlinedInput, Paper, TextField, styled, useTheme } from "@mui/material";
import { text } from "stream/consumers";
import { Script } from "vm";
function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
function Dashboard() {
  const [users, setUsers] = React.useState<UsersInterface[]>([]);
  const getUsers = async () => {
    const apiUrl = "http://localhost:8080/users";
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setUsers(res.data);
        }
      });
  };
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Paper elevation={3} sx={{ margin: 5, width: 550, height: 300 }}>
        <Grid container spacing={2} sx={{ margin: 2 }}>
          <Grid item xs={6}>
            <p>Speed</p>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ mt: 1, width: '15ch', mr: 1 }} variant="outlined" size="small" disabled>
              <OutlinedInput
                id="speed"
                endAdornment={<InputAdornment position="end">km/h</InputAdornment>}
                aria-describedby="speed-helper-text"
                inputProps={{
                  'aria-label': 'speed',
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ ml: 1 }}>
          <Grid item xs={6} sx={{ ml: 1 }}>
            <p>Location</p>
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField id="outlined-basic" label="" variant="outlined" disabled size="small" />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField id="outlined-basic" label="" variant="outlined" disabled size="small" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ ml: 1 }}>
          <Grid item xs={6} sx={{ ml: 1 }}>
            <p>Transportation Laps</p>
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField id="outlined-basic" label="" variant="outlined" disabled size="small" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ ml: 1 }}>
          <Grid item xs={6} sx={{ ml: 1 }}>
            <p>Battery Status</p>
          </Grid>
          <Grid item xs={5} sx={{ mt: 2 }}>
            <Box sx={{ width: '70%' }}>
              <LinearProgressWithLabel value={progress} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default Dashboard;
