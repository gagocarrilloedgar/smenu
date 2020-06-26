import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid, Avatar, Paper, Fab } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import MediaControlCard from "../../components/title.component";
import { TestBarContext } from "./testbar1provider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: "33.33%",
    fontWeight: 600,
    flexShrink: 0,
    textAlign: "left",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  blue: {
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    fontSize: 40,
  },
}));

const styleFab = {
  margin: 20,
  color: "white",
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
};

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const testBarProvider = useContext(TestBarContext);

  const [carta, setCarta] = useState([
    {
      tipo: "Pizzas",
      contenido: [
        {
          titulo: "Dolce vita ",
          descripcion:
            "Champiñones, Salami, Tomate, Cebolla, Aceitunas negras, Pimiento Rojo, Mozzarella y Orégano",
          precio: "9.75",
        },
        {
          titulo: "San Remo ",
          descripcion: "Tomate, Mozzarella, Salmón ahumado, Caviar Y Orégano",
          precio: "9.95",
        },
        {
          titulo: "Torino",
          descripcion:
            "Espárragos, Jamón dulce, Roquefort, Tomate, Mozzarella y Orégano",
          precio: "9.75",
        },
        {
          titulo: "Boloñesa",
          descripcion:
            "Salsa boloñesa, Mozzarella, Aceitunas rellenas y Orégano",
          precio: "8.90",
        },
        {
          titulo: "Romana",
          descripcion: "Salami, Pimiento rojo, Tomate, Mozzarella y Orégano",
          precio: "8.90",
        },
        {
          titulo: "Calzone",
          descripcion:
            "Champiñones, Jamón dulce, Huevo, Tomate, Mozzarella y Orégano",
          precio: "9.60",
        },
      ],
    },
    {
      tipo: "Ensaldas",
      contenido: [
        {
          titulo: "Ensalada Roquefort",
          descripcion:
            "Ensalada variada, Endivias, Jamón de pato, Roquefort y Nueces.",
          precio: "8.90",
        },
        {
          titulo: "Ensalada Dolve Vita",
          descripcion:
            "Ensalada variada, Tomate, Queso, Remolacha, Nueces y Huevo duro.",
          precio: "8.50",
        },
        {
          titulo: "Ensalada  Capricio",
          descripcion: "Ensalada, Atún, Aceitunas rellenas, Maíz y Nueces.",
          precio: "8.50",
        },
        {
          titulo: "Ensalada Veneciana ",
          descripcion: "Ensalada, Salmón, Gambas, Piña y Caviar.",
          precio: "8.90",
        },
      ],
    },
    {
      tipo: "Pastas y Carnes",
      contenido: [
        {
          titulo: "Pastas mixtas",
          descripcion:
            "Espaghettis carbonara, Tallarines boloñesa y Pajaritas Roquefort",
          precio: "8.90",
        },
        {
          titulo: "Pastas seca gratinada",
          descripcion:
            "Macarrones, Tallarines verdes espinacas, Espaghettis, Multicolor, Pajaritas",
          precio: "8.90",
        },
        {
          titulo: "Pastas seca sin gratinar",
          descripcion:
            "Macarrones, Tallarines verdes espinacas, Espaghettis, Multicolor, Pajaritas",
          precio: "8",
        },
        {
          titulo: "Pastas rellenas sin gratinar",
          descripcion:
            "Raviolis de carne, Raviolis salmon, Lumetes de foie, Gnochettis de patata Fiocchis de queso y pera, Corazones 4 quesos, Tortelinis de setas, Fiochetti de queso de cabra y cebolla caramelizada, Fiocchetis al gorgonzola, Tortelinis de carne, Surtido de pastas rellenas, Lumetes vierra y gamba",
          precio: "9.25",
        },
      ],
    },
    {
      tipo: "Mexicano",
      contenido: [
        {
          titulo: "Nachos GUADALAJARA  ",
          descripcion:
            "Triángulos de maíz, Frijoles fritos, Jalapeños y Queso.",
          precio: "5",
        },
        {
          titulo: "Nachos MEXICO ",
          descripcion:
            "Triángulos de maíz, Pollo, Cebolla, Queso y Pimiento rojo/Tomate (opcional).",
          precio: "5.5",
        },
        {
          titulo: "Nachos NACHOS CON GUACAMOLE ",
          descripcion: "Triángulos de maíz y Guacamole",
          precio: "6",
        },
      ],
    },
    {
      tipo: "Posters y vinos (solo restaurante)",
      contenido: [
        {
          titulo: "Zumo de Naraja ",
          descripcion: "",
          precio: "4.50",
        },
        {
          titulo: "Banana al horno falambeada ",
          descripcion: "",
          precio: "4.70",
        },
        {
          titulo: "Macedonia de frutas naturales al kiwi ",
          descripcion: "",
          precio: "4.70",
        },
        {
          titulo: "Crema catalana",
          descripcion: "",
          precio: "3.80",
        },
      ],
    },
  ]);

  const [info, setInfo] = useState({
    nombre: "Dolce Vitta Blanes",
    direccion: "Carrer Josep Trueta, 8, 17300 Blanes, Girona",
    tlf: "972 33 47 92",
    foto:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/8b/68/01/sala.jpg",
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid style={{ padding: "10px", margin: "10px" }}>
      <Grid container container justify="center" style={{ padding: "10px" }}>
        <MediaControlCard bar={info} />
      </Grid>
      <Grid container container justify="center">
        <Grid item xs={11} spacing={10} justify="center">
          {carta.map((item, index) => (
            <ExpansionPanel
              elevation={5}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>{item.tipo}</Typography>
              </ExpansionPanelSummary>
              {item.contenido.map((producto) => (
                <ExpansionPanelDetails>
                  <Grid container>
                    <Grid item xs={10} style={{ marginTop: "10px" }}>
                      <Typography
                        style={{ textAlign: "left", fontWeight: "600" }}
                      >
                        {producto.titulo}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} style={{ marginTop: "10px" }}>
                      <Typography>{producto.precio + " €"}</Typography>
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "10px" }}>
                      <Typography style={{ textAlign: "left" }}>
                        {producto.descripcion}
                      </Typography>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              ))}
            </ExpansionPanel>
          ))}
        </Grid>
      </Grid>
      {/*<Fab
        color="primary"
        variant="extended"
        style={styleFab}
        size="medium"
        onClick={() => testBarProvider.handleChange("2")}
      >
        Pedir ya
      </Fab>*/}
    </Grid>
  );
}
