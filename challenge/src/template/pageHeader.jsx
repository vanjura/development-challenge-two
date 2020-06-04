import React from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    background: {
        background: '#172A3C'
    }
}));

export default props => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div>
                <img
                    style={{ marginLeft: '55px', marginTop: '15px', marginBottom: '15px' }}
                    src="https://www.medcloud.co/app/logos/medcloud.png"
                    alt="Medcloud"
                    height="70">
                </img>

            </div>
            <Divider />
            <List>
                <ListItem button component="a" href="#/list">
                    <ListItemIcon><ListIcon /></ListItemIcon>
                    <ListItemText primary={'Listagem'} />
                </ListItem>
                <ListItem button component="a" href="#/cadastrar">
                    <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
                    <ListItemText primary={'Cadastro'} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button component="a" href="#/about">
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary={'Sobre'} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar style={{ background: '#172A3C' }}>
                    <React.Fragment key={'left'}>
                        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        {/* <Button onClick={toggleDrawer('left', true)}>{'left'}</Button> */}
                        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                            {list('left')}
                        </Drawer>
                    </React.Fragment>
                    <Typography variant="h6" className={classes.title}>
                        {props.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        // <header className='page-header'>
        //     <h2>{props.name} <small>{props.small}</small></h2> 
        // </header>
    )
}