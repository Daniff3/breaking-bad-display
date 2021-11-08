import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const NavBar = () => {
    const [selectedSpanish, setSelectedSpanish] = useState(true);
    const [selectedEnglish, setSelectedEnglish] = useState(false);
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const history = useHistory();

    const changeLanguage = (event, lang) => {
        i18n.changeLanguage(lang);
    }

    const handleClick = () => {
        history.push("/characters");
    }

    useEffect(() => {
        const spanishSelected = i18n.language === 'es';
        setSelectedSpanish(spanishSelected);
        setSelectedEnglish(!spanishSelected);
    }, [i18n.language]);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={handleClick} color="inherit" aria-label="Menu">
                        <HomeIcon  />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {t('app title')}
                    </Typography>
                    <ToggleButtonGroup exclusive onChange={changeLanguage} className={classes.toggleGroup}>
                        <ToggleButton className={selectedSpanish ? classes.toggleSelected : classes.toggleUnselected} value='es'>
                            { t('languages.spanish') }
                        </ToggleButton>
                        <ToggleButton className={selectedEnglish ? classes.toggleSelected : classes.toggleUnselected} value='en'>
                            { t('languages.english') }
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    toggleSelected: {
        color: "white",
        border: "none",
        backgroundColor: "#3F51FA"
    },
    toggleUnselected: {
        color: "white",
        border: "none"
    },
    toggleGroup: {
        backgroundColor: "#3f51b5"
    }
}));

export default NavBar;
