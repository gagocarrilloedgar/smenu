import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    borderRadius: 5,
    margin: 10,
    height: 100,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 125,
  },
}));

export default function MediaControlCard({bar}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} raised>
      <CardMedia
        className={classes.cover}
        image={bar.foto}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            style={{
              textAlign: "left",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: `"Montserrat",sans-serif`,
            }}
          >
            {bar.nombre}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{
              textAlign: "left",
              fontSize: 12,
              fontWeight: 500,
              fontFamily: `"Montserrat",sans-serif`,
            }}
          >
            {bar.direccion}
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{
              textAlign: "left",
              fontSize: 12,
              fontWeight: 500,
              fontFamily: `"Montserrat",sans-serif`,
            }}
          >
            {bar.tlf}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
