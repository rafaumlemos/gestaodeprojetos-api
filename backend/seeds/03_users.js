const moment = require("moment");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        // PARTNER 1 //
        {id: "1", name: "Teste User 1 do Parceiro 1", phone: "71999999999", email: "testeuser1parceiro1@gmail.com", password: "testeuser1parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "2", name: "Teste User 2 do Parceiro 1", phone: "71999999999", email: "testeuser2parceiro1@gmail.com", password: "testeuser2parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "3", name: "Teste User 3 do Parceiro 1", phone: "71999999999", email: "testeuser3parceiro1@gmail.com", password: "testeuser3parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "4", name: "Teste User 4 do Parceiro 1", phone: "71999999999", email: "testeuser4parceiro1@gmail.com", password: "testeuser4parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "5", name: "Teste User 5 do Parceiro 1", phone: "71999999999", email: "testeuser5parceiro1@gmail.com", password: "testeuser5parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "6", name: "Teste User 6 do Parceiro 1", phone: "71999999999", email: "testeuser6parceiro1@gmail.com", password: "testeuser6parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "7", name: "Teste User 7 do Parceiro 1", phone: "71999999999", email: "testeuser7parceiro1@gmail.com", password: "testeuser7parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "8", name: "Teste User 8 do Parceiro 1", phone: "71999999999", email: "testeuser8parceiro1@gmail.com", password: "testeuser8parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        {id: "9", name: "Teste User 9 do Parceiro 1", phone: "71999999999", email: "testeuser9parceiro1@gmail.com", password: "testeuser9parceiro1", partnerId: "1", dueDate: moment().add(1, "year").toDate()},
        // PARTNER 2 //
        {id: "10", name: "Teste User 1 do Parceiro 2", phone: "71999999999", email: "testeuser1parceiro2@gmail.com", password: "testeuser1parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "11", name: "Teste User 2 do Parceiro 2", phone: "71999999999", email: "testeuser1parceiro2@gmail.com", password: "testeuser1parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "12", name: "Teste User 3 do Parceiro 2", phone: "71999999999", email: "testeuser2parceiro2@gmail.com", password: "testeuser2parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "13", name: "Teste User 4 do Parceiro 2", phone: "71999999999", email: "testeuser3parceiro2@gmail.com", password: "testeuser3parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "14", name: "Teste User 5 do Parceiro 2", phone: "71999999999", email: "testeuser4parceiro2@gmail.com", password: "testeuser4parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "15", name: "Teste User 6 do Parceiro 2", phone: "71999999999", email: "testeuser5parceiro2@gmail.com", password: "testeuser5parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "16", name: "Teste User 7 do Parceiro 2", phone: "71999999999", email: "testeuser6parceiro2@gmail.com", password: "testeuser6parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "17", name: "Teste User 8 do Parceiro 2", phone: "71999999999", email: "testeuser7parceiro2@gmail.com", password: "testeuser7parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "18", name: "Teste User 9 do Parceiro 2", phone: "71999999999", email: "testeuser8parceiro2@gmail.com", password: "testeuser8parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        // PARTNER 3 //
        {id: "20", name: "Teste User 1 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser1parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "21", name: "Teste User 2 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser2parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "22", name: "Teste User 3 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser3parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "23", name: "Teste User 4 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser4parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "24", name: "Teste User 5 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser5parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "25", name: "Teste User 6 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser6parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "26", name: "Teste User 7 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser7parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "27", name: "Teste User 8 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser8parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "28", name: "Teste User 9 do Parceiro 3", phone: "71999999999", email: "testeuser9parceiro3@gmail.com", password: "testeuser9parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()}
      ]);
    });
};