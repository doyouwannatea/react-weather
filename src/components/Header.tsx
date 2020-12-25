import React from 'react'

import { makeStyles, fade } from '@material-ui/core/styles';
import { Menu, Search } from '@material-ui/icons';
import {
    InputBase,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'right',
        marginLeft: 'auto',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));

type Props = {
    toggleNavbar: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

const Header: React.FC<Props> = ({ toggleNavbar }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleNavbar(true)}>
                        <Menu />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header