import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import CharacterService from '../services/CharacterService';
import QuoteService from '../services/QuoteService';
import { useParams } from 'react-router';

const CharacterDetails = () => {
    const classes = useStyles();
    const [character, setCharacter] = useState('');
    const history = useHistory();
    const { t } = useTranslation();
    const {id} = useParams();
    const [quote, setQuote] = useState("");

    useEffect(() => {
        CharacterService.getCharacter(id).then((res1) => {
            const occupationsMap = res1.data[0].occupation
            if (  occupationsMap.length > 0 ) {
                const occupation = occupationsMap.map((item, index) => (
                    index === occupationsMap.length - 1 ? item : item + ", " 
                ));
                res1.data[0].occupation = occupation;
            } else {
                res1.data[0].occupation = t("character.occupation unknown")
            }
            setCharacter(res1.data[0]);
            QuoteService.getQuote(res1.data[0].name).then((res2) => {
                if ( res2.data.length > 0 ) {
                    const quotes = res2.data;
                    const selectedQuote = quotes[Math.floor(Math.random()*quotes.length)];
                    setQuote(selectedQuote.quote);
                } else {
                    setQuote(t("character.quote not found"))
                }
            });
        });
    }, [id, t]);

    const refreshQuote = () => {
        QuoteService.getQuote(character.name).then((res) => {
            const quotes = res.data;
            const selectedQuote = quotes[Math.floor(Math.random()*quotes.length)];
            setQuote(selectedQuote.quote);
        });
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.h2} >{ t("character.details") }</h2>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={character.img}
                    title="Character picture"
                />
                <CardContent>
                    <Typography color="textSecondary">
                        <label>{ t("character.name") }: </label> {character.name}
                    </Typography>
                    <Typography color="textSecondary">
                        <label>{ t("character.birthday") }: </label> {character.birthday}   
                    </Typography>
                    <Typography color="textSecondary">
                        <label>{ t("character.occupation") }: </label> { character.occupation }
                    </Typography>
                    <Typography color="textSecondary">
                        <label>{ t("character.status") }: </label> { character.status }
                    </Typography>
                    <Typography color="textSecondary">
                        <label>{ t("character.portrayed") }: </label> { character.portrayed }
                    </Typography>
                    <Typography color="textSecondary">
                        <label>{ t("character.show") }: </label> { character.category }
                    </Typography>
                    <Typography color="textSecondary">
                        <label>{ t("character.quote") }: </label> { quote === "None" ? t("character.quote not found") : quote }
                    </Typography>
                    <Button className={classes.button} variant="contained" color="primary"
                            onClick={refreshQuote} > {t("actions.refresh quote")} </Button>
                </CardContent>
            </Card>
            <Button className={classes.button} variant="contained" color="primary" 
                    onClick={history.goBack}>{ t("actions.go back") }</Button>
        </div>
    )
}

const useStyles = makeStyles({
    h2: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1em'
    },
    container: {
        margin: '2em 5em'
    },
    button: {
        margin: '2em'
    },
    media: {
        height: 450,
        width: 350,
        float: "left",
        margin: "20px"
    }
});

export default CharacterDetails;