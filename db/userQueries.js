const db = require('./connection');

function insert(user) {
	return db('user').insert(user).returning(['code'])
		.then(arr => arr[0].code)
}

module.exports = {
	insert
}
