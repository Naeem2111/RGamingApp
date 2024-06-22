const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.post('/players', async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/players', async (req, res) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
