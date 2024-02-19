import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import {state} from "./data";
import {ButtonSx, Tsx, } from "./style";
import {Button} from "@mui/material";


const drawerWidth = 300;

export default function NavBar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,bgcolor:"#222",display:"flex",justifyContent: "center",
                alignItems: "center", }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        AdliKara 🎙️
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{

                    width: drawerWidth,
                    flexShrink: 0,

                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box',bgcolor:"#222" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'hidden' }}>
                    <List>
                        {state.map((e) => {
                            return (
                                <ListItem key={e} disablePadding>
                                    <Box sx={{ display: "flex" }}>
                                        <Button sx={ButtonSx}>{e.icon}</Button>
                                        <Typography sx={Tsx}>{e.name}</Typography>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Divider color="#fff"/>
                    <List >

                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Typography paragraph>
                   pp
                </Typography>
                <Typography paragraph>
                    pp
                </Typography>
            </Box>
        </Box>
    );
}