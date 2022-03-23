const express = require('express');
const torneo = require('../models/torneo');
const helper = require('../helpers/torneo');


const router = express.Router();

//get participantes;
router.get('/torneo', (req, resp) => {
    torneo.find()
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message:error }));
});

router.post("/torneo", async(req, res) => {
    const part = torneo(await helper.completeInfoPart(req.body));
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

  router.get("/torneo/eliminar/:id", (req, res) => {
    const { id } = req.params;
    torneo
      .updateOne({ _id: id }, { $set: { eliminado: true } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;