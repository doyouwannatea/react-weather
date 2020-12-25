import React from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';
import {
    Close,
    NightsStayOutlined,
    HomeOutlined,
    WbSunnyOutlined,
    Mail,
    GitHub,
    Telegram
} from '@material-ui/icons'
import {
    Button,
    Divider,
    Drawer,
    BottomNavigation,
    BottomNavigationAction,
    ButtonGroup,
    FormControlLabel,
    Switch
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    content: {
        width: 260,
    },
    homeBtn: {
        flex: 1
    },
    btnGroup: {
        display: 'flex'
    },
    switchContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 0,
        padding: '0 1rem',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.04),
        }
    },
    switchInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    switchBtn: {
        display: 'flex',
        alignItems: 'center'
    },
    BottomNavigation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    BottomNavigationAction: {
        minWidth: 60,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.04),
        }
    }
}))

type Props = {
    isOpen: boolean,
    isDark: boolean,
    toggleNavbar: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
    toggleCheme: () => void
}

const Navbar: React.FC<Props> = ({ isOpen, toggleNavbar, isDark, toggleCheme }) => {
    const classes = useStyles()

    return (
        <Drawer open={isOpen} onClose={toggleNavbar(false)}>
            <div className={classes.content}>
                <ButtonGroup className={classes.btnGroup} variant="text">
                    <Button href="#" className={classes.homeBtn} startIcon={<HomeOutlined />} >
                        Home
                    </Button>
                    <Button onClick={toggleNavbar(false)}>
                        <Close />
                    </Button>
                </ButtonGroup>
                <Divider />
                <FormControlLabel
                    className={classes.switchContainer}
                    control={
                        <Switch
                            checked={isDark}
                            onChange={toggleCheme}
                            name="theme-switch"
                            color="primary"
                        />
                    }
                    label={<span className={classes.switchBtn}>{isDark ? <NightsStayOutlined /> : <WbSunnyOutlined />}</span>}
                />
                <Divider />
                <BottomNavigation className={classes.BottomNavigation} >
                    <BottomNavigationAction
                        className={classes.BottomNavigationAction}
                        rel="noopener"
                        target="_blank"
                        href="mailto:alexandr.bulgatov13@gmail.com"
                        icon={<Mail />}
                    />
                    <BottomNavigationAction
                        className={classes.BottomNavigationAction}
                        rel="noopener"
                        target="_blank"
                        href="https://github.com/doyouwannatea/"
                        icon={<GitHub />}
                    />
                    <BottomNavigationAction
                        className={classes.BottomNavigationAction}
                        rel="noopener"
                        target="_blank"
                        href="https://t.me/doyouwannatea"
                        icon={<Telegram />}
                    />
                </BottomNavigation>
            </div>
        </Drawer>
    )
}

export default Navbar