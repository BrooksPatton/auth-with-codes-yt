const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/show-code', (req, res) => {
	const code = req.query.code;

	res.render('show-code', {
		code
	});
});

module.exports = router;
