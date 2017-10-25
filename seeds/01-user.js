
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, email: 'michelle@galvanize.com', username: 'michelle', code: 'plfu5'},
      ]);
    });
};
