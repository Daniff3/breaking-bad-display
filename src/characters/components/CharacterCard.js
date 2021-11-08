import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.character.img}
        title="Character picture"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
            <Link to={props.url + "/" + props.character.char_id}>{props.character.name}</Link>
        </Typography>
        <Typography >
          {props.t("character.nickname")}: {props.character.nickname}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
    root: {
      maxWidth: 250
    },
    media: {
      height: 345
    },
    cardContent: {
        textAlign: "center"
    }
  });

export default CharacterCard;