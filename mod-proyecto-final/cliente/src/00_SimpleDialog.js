import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Modal from '@material-ui/core/Modal';

import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link,useParams} from "react-router-dom";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  /*MOSTRAR DETALLES CONTACTO*/
  const [detalleContacto, setDetalleContacto] = useState([]);
  const params=useParams();
  const emailContacto=params.contacto;

  useEffect(()=>{
      fetch("http://localhost:3001/user/elenabestilleiro@gmail.com")
      .then((res)=>res.json())
      .then((res)=>{
          setDetalleContacto(res[0].contactos)
      });
  },[]);

  const mostrarDetalleContacto = detalleContacto.filter(persona=>persona.contacto===emailContacto).map(function(persona){
    return (
        <>
          <div className="container-fluid">
              <div className="row">
                  <div className="row-8">
                      <h4>{persona.nombre} {persona.apellido}</h4>
                      <p>{persona.edad}</p>
                      <p>{persona.descripcion}</p>
                      <p>{persona.contacto}</p>
                      <p>"Mejor Madre" {persona.mejor_madre}</p>
                      <p>"Mejor Padre" {persona.mejor_padre}</p>
                      <p>"Best Friend" {persona.best_friend}</p>
                      <p>"Te Quiero" {persona.te_quiero}</p>
                      <p>"Como de la familia" {persona.como_de_la_familia}</p>
                      <p>"Detallista" {persona.detallista}</p>
                      <p>"Luchador" {persona.luchador}</p>
                      <p>"Optimista" {persona.optimista}</p>
                      <p>"Artista" {persona.artista}</p>
                      <p>"En plena forma" {persona.en_plena_forma}</p>
                      <p>"Al más trabajador" {persona.al_mas_trabajador}</p>
                  </div>
              </div>
          </div>
      </>
    );
  });
  /*MOSTRAR DETALLES CONTACTO*/


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      {/* <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle> */}
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>

            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>

          <ListItemText primary="Add account" />
        </ListItem>
      </List>
      {mostrarDetalleContacto}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };


  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography> */}
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}