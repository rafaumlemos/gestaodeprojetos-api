const moment = require("moment");
exports.seed = async function(knex) {
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
        {id: "10", name: "Teste User 10 do Parceiro 2", phone: "71999999999", email: "testeuser10parceiro2@gmail.com", password: "testeuser10parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "11", name: "Teste User 11 do Parceiro 2", phone: "71999999999", email: "testeuser11parceiro2@gmail.com", password: "testeuser11parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "12", name: "Teste User 12 do Parceiro 2", phone: "71999999999", email: "testeuser12parceiro2@gmail.com", password: "testeuser12parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "13", name: "Teste User 13 do Parceiro 2", phone: "71999999999", email: "testeuser13parceiro2@gmail.com", password: "testeuser13parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "14", name: "Teste User 14 do Parceiro 2", phone: "71999999999", email: "testeuser14parceiro2@gmail.com", password: "testeuser14parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "15", name: "Teste User 15 do Parceiro 2", phone: "71999999999", email: "testeuser15parceiro2@gmail.com", password: "testeuser15parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "16", name: "Teste User 16 do Parceiro 2", phone: "71999999999", email: "testeuser16parceiro2@gmail.com", password: "testeuser16parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "17", name: "Teste User 17 do Parceiro 2", phone: "71999999999", email: "testeuser17parceiro2@gmail.com", password: "testeuser17parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        {id: "18", name: "Teste User 18 do Parceiro 2", phone: "71999999999", email: "testeuser18parceiro2@gmail.com", password: "testeuser18parceiro2", partnerId: "2", dueDate: moment().add(1, "year").toDate()},
        // PARTNER 3 //
        {id: "19", name: "Teste User 19 do Parceiro 3", phone: "71999999999", email: "testeuser19parceiro3@gmail.com", password: "testeuser19parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "20", name: "Teste User 20 do Parceiro 3", phone: "71999999999", email: "testeuser20parceiro3@gmail.com", password: "testeuser20parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "21", name: "Teste User 21 do Parceiro 3", phone: "71999999999", email: "testeuser21parceiro3@gmail.com", password: "testeuser21parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "22", name: "Teste User 22 do Parceiro 3", phone: "71999999999", email: "testeuser22parceiro3@gmail.com", password: "testeuser22parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "23", name: "Teste User 23 do Parceiro 3", phone: "71999999999", email: "testeuser23parceiro3@gmail.com", password: "testeuser23parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "24", name: "Teste User 24 do Parceiro 3", phone: "71999999999", email: "testeuser24parceiro3@gmail.com", password: "testeuser24parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "25", name: "Teste User 25 do Parceiro 3", phone: "71999999999", email: "testeuser25parceiro3@gmail.com", password: "testeuser25parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "26", name: "Teste User 26 do Parceiro 3", phone: "71999999999", email: "testeuser26parceiro3@gmail.com", password: "testeuser26parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()},
        {id: "27", name: "Teste User 27 do Parceiro 3", phone: "71999999999", email: "testeuser27parceiro3@gmail.com", password: "testeuser27parceiro3", partnerId: "3", dueDate: moment().add(1, "year").toDate()}
      ]);
    });
};