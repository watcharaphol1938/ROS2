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
function Analytics() {
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
                <Typography textAlign="center">Analytics</Typography>
            </Paper>
        </div>
    );
}
export default Analytics;
