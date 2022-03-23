const express = require('express');
const { v4: uuidv4 }  = require('uuid');
const torneo = require('../models/torneo');


const router = express.Router();

//get participantes;
router.get('/torneo', (req, resp) => {
    torneo.find()
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message:error }));
});

router.post("/torneo", (req, res) => {
    const {edad, apodo, nombre, comuna, ranking} = req.body;
    const info = {
        edad,
        apodo,
        nombre,
        comuna,
        ranking,
        fechaIncripcion: new Date().toISOString().toString()
    }
    console.log('info ==> ', info);
    const part = torneo(info);
    part.save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  // get a user
router.get("/torneo/:uid", (req, res) => {
    const { uid } = req.params;
    torneo
      .findById(uid)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.delete("/torneo/:id", (req, res) => {
    const { id } = req.params;
    torneo
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.put("/torneo/:id", (req, res) => {
    const { id } = req.params;
    const { edad, apodo, nombre, comuna, ranking } = req.body;
    torneo
      .updateOne({ _id: id }, { $set: { edad, apodo, nombre, comuna, ranking } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;