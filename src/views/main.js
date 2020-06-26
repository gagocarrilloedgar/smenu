import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import logo from "../../src/smenu.png";
import ContactButton from "../components/contact.component";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://smenu.vercel.app/">
        SMenu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    textAlign: "left",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    fontFamily: `"Montserrat",sans-serif`,
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Pago único",
    price: "60",
    subheader: "Más económico",
    description: [
      "Carta online personalizada",
      "10 Códigos QR para tus mesas ",
      "Color y estilo personalizado",
      "10€ cada 10 códigos QR extra",
      "10€ cada modificación de carta",
      "No incluye botón de aviso al camarero/a",
    ],
    buttonText: "Pedir",
    buttonVariant: "outlined",
  },
  {
    title: "Mensual",
    subheader: "Más popular",
    price: "10/mes",
    description: [
      "Carta online personalizada",
      "Botón de aviso al camarero/a integrado en la carta",
      "10 Códigos QR para tus mesas totalmente gratis",
      "Color y estilo personalizado",
      "10€ cada 10 códigos QR extra",
      "10 modificaciones de carta anuales",
    ],
    buttonText: "Lo quiero",
    buttonVariant: "contained",
  },
  {
    title: "A medida",
    subheader: "A partir de",
    price: "30/mes",
    description: [
      "Carta online personalizada",
      "Botón de aviso al camarero/a integrado en la carta",
      "Códigos QR totalmente gratis",
      "Color y estilo personalizado",
      "Modificaciones ilimitadas de carta",
      "Contador de visitas y estadísticas de tu local",
    ],
    buttonText: "Más información",
    buttonVariant: "outlined",
  },
];
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={10}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <img width="30px" height="30px" src={logo} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={{ fontFamily: `"Montserrat",sans-serif` }}
            className={classes.toolbarTitle}
          >
            mart Menu
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          style={{ fontFamily: `"Montserrat",sans-serif` }}
        >
          Smart Menu
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
          paragraph
          style={{ fontFamily: `"Montserrat",sans-serif` }}
        >
          Smart Menu es una carta interactiva online que te permite poder
          garantizar las medidas de seguridad en tu establecimiento de forma
          sencilla y económica y a la vez moderniza tu bar o restaurante.
        </Typography>
        <Grid xs item>
          <Button
            color="primary"
            variant="contained"
            onClick={() => (window.location = "/demo")}
          >
            Ver demo
          </Button>
        </Grid>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography
                      style={{ fontFamily: `"Montserrat",sans-serif` }}
                      component="h2"
                      variant="h3"
                      color="textPrimary"
                    >
                      €{tier.price}
                    </Typography>
                    <Typography
                      style={{ fontFamily: `"Montserrat",sans-serif` }}
                      variant="h6"
                      color="textSecondary"
                    ></Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        style={{ fontFamily: `"Montserrat",sans-serif` }}
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Grid item xs justify="center">
                    <ContactButton data={tier} />
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {/*{footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
                ))}*/}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
