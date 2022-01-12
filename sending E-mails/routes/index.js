const express = require('express');
const router = express.Router();
router.get('/', ensureAuthenticated, (req, res) =>
  res.render('./email/email.html')
);

module.exports = router;
