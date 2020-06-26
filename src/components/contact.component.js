import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { Typography } from "@material-ui/core";

export default function ContactButton({ data }) {
  const [open, setOpen] = React.useState(false);

  const montserratStyle = {
    fontFamily: `"Montserrat",sans-serif`,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={() => handleClickOpen()}
        fullWidth
        variant={data.buttonVariant}
      >
        {data.buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contacto</DialogTitle>
        <DialogContent>
          <Typography align="justify" style={montserratStyle}>
            Para realizar un encargo por favor llame al: 693430654
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()} color="primary">
            Cerrar
          </Button>
          {/*<Button color="primary">Enviar</Button>*/}
        </DialogActions>
      </Dialog>
    </div>
  );
}
