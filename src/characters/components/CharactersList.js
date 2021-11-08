import CharacterService from '../services/CharacterService';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CharacterCard from "./CharacterCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Switch, Route } from 'react-router';
import CharacterDetails from './CharacterDetails';

const CharactersList = ({match}) => {
    const [characters, setCharacters] = useState([]);
    const { t } = useTranslation();
    const classes = useStyles();
    
    useEffect(() => {
        CharacterService.getCharacters()
            .then((response) => {
                setCharacters(response.data)
            });
    }); 
    
    return (
        <Switch>
            <Route exact path={`${match.path}`}>
                <div className={classes.container}>
                    <Grid container >
                        {characters.map(item => (
                            <Grid className={classes.gridEnvelop} key={item.char_id} item xs={12} sm={6} md={3}>
                                <CharacterCard key={item.char_id} 
                                                className={classes.card} 
                                                character={item} 
                                                t={t}
                                                url={`${match.url}`} />
                            </Grid>
                        ))}
                    </Grid>            
                </div>
                </Route>
            <Route path={`${match.path}/:id`} component={CharacterDetails} /> 
        </Switch>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: "0",
        marginLeft: "20px",
        marginBottom: "70px",
        marginTop: "20px"
    },
    card: {
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    gridEnvelop: {
        marginBottom: "20px"
    }
  }));

export default CharactersList