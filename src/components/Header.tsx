import React, { useContext, useState } from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import { Menu, Search } from '@material-ui/icons'
import {
    InputBase,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@material-ui/core'

import { NavbarContext, WeatherDataContext } from '../context'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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

const Header = () => {
    const [cityName, setCityName] = useState('')
    const { currentPlace, setWeatherByCityName } = useContext(WeatherDataContext)
    const { toggleNavbar } = useContext(NavbarContext)
    const classes = useStyles()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value)
    }

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleNavbar!(true)}>
                        <Menu />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <form onSubmit={setWeatherByCityName!(cityName)}>
                            <InputBase
                                onChange={onChange}
                                value={cityName}
                                placeholder={currentPlace!.length > 0 ? currentPlace : "Search…"}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header