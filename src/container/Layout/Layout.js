import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import EqualizerSharpIcon from '@material-ui/icons/EqualizerSharp';
import { NavLink } from 'react-router-dom';
import Cappitallwant from '../../assets/images/cappitallwant.png';
import './Layout.css'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        background: "#46A29F"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        background: "white",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    listStyle: {
        padding: '0px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
   
}));

export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ background: "#2C3335" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Cappitallwant solutions
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <img src={Cappitallwant} alt="cappitallwantLogo" width="100%" />
                    <IconButton onClick={handleDrawerClose} style={{ position: "absolute" }}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                {/* <Divider /> */}
                <List className={classes.listStyle}>
                    <Divider />
                    <ListItem button
                        component={NavLink}
                        to={`/Dashboard`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#fff",
                            background: 'rgba(241,222,250,0.275)',

                        }}>
                        <ListItemIcon ><DashboardIcon /></ListItemIcon>
                        <ListItemText primary={"Dashboard"} />
                    </ListItem>
                    <Divider />
                    <ListItem button
                        component={NavLink}
                        to={`/Charts`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#fff",
                            background: 'rgba(241,222,250,0.275)',

                        }}>
                        <ListItemIcon><EqualizerSharpIcon /></ListItemIcon>
                        <ListItemText primary={"Charts"} />
                    </ListItem>
                    <Divider />
                    <ListItem button
                        component={NavLink}
                        to={`/about`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#fff",
                            background: 'rgba(241,222,250,0.275)',

                        }}>
                        <ListItemIcon><InfoSharpIcon /></ListItemIcon>
                        <ListItemText primary={"About"} />
                    </ListItem>
                    <Divider />
                    <ListItem button
                        component={NavLink}
                        to={`/login`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#fff",
                            background: 'rgba(241,222,250,0.275)',

                        }}>
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItem>
                    <Divider />
                </List>
                <div className="Footer">
                    Powered by Botmantra&trade;
                </div>


            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}

            >
                <div className={classes.drawerHeader} />
                {/* main content of dashboards start  */}
                {props.children}

                {/* main content of dashboard end */}
            </main>
        </div>
    );
}
