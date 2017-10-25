const express = require('express');
const userDB = require('../db/userQueries');

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

router.get('/dashboard', (req, res) => {
	const code = req.query.code;

	if(!code) return res.status(400).redirect('/');
	
	userDB.getByCode(code)
		.then(user => {
			if(!user) {
				res.redirect('/');
			} else {
				res.render('dashboard', {
					user
				});
			}
		})
		.catch(err => res.status(500).send(err));
});

module.exports = router;
