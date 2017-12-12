const express = require('express');

const router = express.Router();

router.get('/whoami', (req, res) => {
  const resObj = {
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    software: req.headers['user-agent']
      .match(/\((.*?)\)/g)[0]
      .split(';')[1]
      .slice(0, -1)
      .trim(),

    language: req.headers['accept-language'].match(/(..\-..)/g).join(','),
  };
  res.json(resObj);
});

module.exports = router;
