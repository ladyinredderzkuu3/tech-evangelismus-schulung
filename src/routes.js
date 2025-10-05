const express = require('express');
const router = express.Router();

router.get('/resources', (req, res) => {
  res.json({ message: 'Ressourcen-Bibliothek!' });
});

module.exports = router;