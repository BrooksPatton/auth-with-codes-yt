const db = require('./connection');

function insert(user) {
	return db('user').insert(user).returning(['code'])
		.then(arr => arr[0].code)
}

function getByCode(code) {
	return db('user').select().where('code', code).first();
}

module.exports = {
	insert,
	getByCode
}
