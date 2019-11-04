const moment = require("moment");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('partners_admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('partners_admin').insert([
        {id: "1", name: "Teste Admin 1 Partner 1", phone: "71999999999", email: "testeadmin1partner1@gmail.com", password: "testeadminuser1parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "2", name: "Teste Admin 2 Partner 1", phone: "71999999999", email: "testeadmin2partner1@gmail.com", password: "testeadminuser2parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "3", name: "Teste Admin 3 Partner 1", phone: "71999999999", email: "testeadmin3partner1@gmail.com", password: "testeadminuser3parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "4", name: "Teste Admin 4 Partner 2", phone: "71999999999", email: "testeadmin4partner2@gmail.com", password: "testeadminuser4parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "5", name: "Teste Admin 5 Partner 2", phone: "71999999999", email: "testeadmin5partner2@gmail.com", password: "testeadminuser5parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "6", name: "Teste Admin 6 Partner 2", phone: "71999999999", email: "testeadmin6partner2@gmail.com", password: "testeadminuser6parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "7", name: "Teste Admin 7 Partner 3", phone: "71999999999", email: "testeadmin7partner3@gmail.com", password: "testeadminuser7parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "8", name: "Teste Admin 8 Partner 3", phone: "71999999999", email: "testeadmin8partner3@gmail.com", password: "testeadminuser8parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "9", name: "Teste Admin 9 Partner 3", phone: "71999999999", email: "testeadmin9partner3@gmail.com", password: "testeadminuser9parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()}
      ]);
    });
};