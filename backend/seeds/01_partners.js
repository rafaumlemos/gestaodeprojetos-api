const moment = require("moment");
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('partners_admin').del();
  await knex('users').del();
  return knex('partners').del()
    .then(function () {
      // Inserts seed entries
      return knex('partners').insert([
        {id: "1", name: "Nutricionista Esportivo", dueDate: moment().add(1, "year").toDate()},
        {id: "2", name: "Cardiologista", dueDate: moment().add(1, "year").toDate()},
        {id: "3", name: "Endocrinologista", dueDate: moment().add(1, "year").toDate()}
      ]);
    });
};
