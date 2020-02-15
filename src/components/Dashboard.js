import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import Divider from '@material-ui/core/Divider';
import Products from './Products';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.kinvo.com.br/">
        Kinvo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        backgroundColor: '#ffffff',
        color: 'black',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


const myJson = {
    "success": true,
    "data": {
        "summary": {
            "grossBalance": 30047.24,
            "appliedValue": 25540.15,
            "capitalGains": 4507.1,
            "earnings": 3420.43,
            "yield": 18.23
        },
        "products": [
            {
                "productName": "ABEV3 - AMBEV",
                "equity": 1980.90,
                "amount": 100,
                "averagePrice": 19.80,
                "lastQuotation": 20.06,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            },
            {
                "productName": "NEOE3 - NEOENERGIA",
                "equity": 3650.44,
                "amount": 200,
                "averagePrice": 17.80,
                "lastQuotation": 18.00,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            },
            {
                "productName": "BIDI4 - Banco Inter",
                "equity": 9600.00,
                "amount": 600,
                "averagePrice": 16.60,
                "lastQuotation": 17.09,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            },
            {
                "productName": "ITSA4 - Itaúsa",
                "equity": 2180.90,
                "amount": 200,
                "averagePrice": 11.80,
                "lastQuotation": 12.59,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            },
            {
                "productName": "WEGE3 - WEG S.A. ",
                "equity": 6540.00,
                "amount": 300,
                "averagePrice": 21.80,
                "lastQuotation": 23.92,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            },
            {
                "productName": "GRND3 - Grendene",
                "equity": 1260.00,
                "amount": 200,
                "averagePrice": 6.30,
                "lastQuotation": 7.61,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            },
            {
                "productName": "EGIE3 - Engie Brasil",
                "equity": 4835.00,
                "amount": 100,
                "averagePrice": 19.80,
                "lastQuotation": 48.35,
                "currentMonthYield": 2.31,
                "lastTwelveMonthsYeld": 12.31
            }
        ]
    } 
};

export default function Dashboard() {

    const [filter, setFilter] = React.useState("");

    const filteredData = myJson.data.products.filter(item =>
        item.productName.toLowerCase().includes(filter)
    );

    const data = myJson.data.summary;

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap 
                        className={classes.title}>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <img src={`public/img/logo.svg`} width="160px;"/>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
            <main className={classes.content} style={{ backgroundColor:"#d5d3f0" }}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <h2 style={{ color:"gray", paddingLeft:"12px" }}>Análise por Classe de Ativos</h2>
                        <Grid item xs={12}>
                            {Products({ setFilter, filter , filteredData, data })}
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
