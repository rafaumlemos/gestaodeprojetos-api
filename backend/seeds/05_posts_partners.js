
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts_partners').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts_partners').insert([
        {id: 1, title: 'Titulo Post Partner Admin 1 Parceiro 1', content: "Conteúdo Post Partner Admin 1 Parceiro 1", createdBy: "1", partnerId: "1"},
        {id: 2, title: 'Titulo Post Partner Admin 2 Parceiro 1', content: "Conteúdo Post Partner Admin 2 Parceiro 1", createdBy: "2", partnerId: "1"},
        {id: 3, title: 'Titulo Post Partner Admin 3 Parceiro 1', content: "Conteúdo Post Partner Admin 3 Parceiro 1", createdBy: "3", partnerId: "1"},
        {id: 4, title: 'Titulo Post Partner Admin 4 Parceiro 2', content: "Conteúdo Post Partner Admin 4 Parceiro 2", createdBy: "4", partnerId: "2"},
        {id: 5, title: 'Titulo Post Partner Admin 5 Parceiro 2', content: "Conteúdo Post Partner Admin 5 Parceiro 2", createdBy: "5", partnerId: "2"},
        {id: 6, title: 'Titulo Post Partner Admin 6 Parceiro 2', content: "Conteúdo Post Partner Admin 6 Parceiro 2", createdBy: "6", partnerId: "2"},
        {id: 7, title: 'Titulo Post Partner Admin 7 Parceiro 3', content: "Conteúdo Post Partner Admin 7 Parceiro 3", createdBy: "7", partnerId: "3"},
        {id: 8, title: 'Titulo Post Partner Admin 8 Parceiro 3', content: "Conteúdo Post Partner Admin 8 Parceiro 3", createdBy: "8", partnerId: "3"},
        {id: 9, title: 'Titulo Post Partner Admin 9 Parceiro 3', content: "Conteúdo Post Partner Admin 9 Parceiro 3", createdBy: "9", partnerId: "3"}
      ]);
    });
};