
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts_users').insert([
        {id: 1, title: 'Titulo Post Usuário 1 Parceiro 1', content: "Conteúdo Post Usuário 1 Parceiro 1", userId: "1", partnerId: "1"},
        {id: 2, title: 'Titulo Post Usuário 2 Parceiro 1', content: "Conteúdo Post Usuário 2 Parceiro 1", userId: "2", partnerId: "1"},
        {id: 3, title: 'Titulo Post Usuário 3 Parceiro 1', content: "Conteúdo Post Usuário 3 Parceiro 1", userId: "3", partnerId: "1"},
        {id: 4, title: 'Titulo Post Usuário 10 Parceiro 2', content: "Conteúdo Post Usuário 10 Parceiro 2", userId: "10", partnerId: "2"},
        {id: 5, title: 'Titulo Post Usuário 11 Parceiro 2', content: "Conteúdo Post Usuário 11 Parceiro 2", userId: "11", partnerId: "2"},
        {id: 6, title: 'Titulo Post Usuário 12 Parceiro 2', content: "Conteúdo Post Usuário 12 Parceiro 2", userId: "12", partnerId: "2"},
        {id: 7, title: 'Titulo Post Usuário 19 Parceiro 3', content: "Conteúdo Post Usuário 19 Parceiro 1", userId: "19", partnerId: "3"},
        {id: 8, title: 'Titulo Post Usuário 20 Parceiro 3', content: "Conteúdo Post Usuário 20 Parceiro 1", userId: "20", partnerId: "3"},
        {id: 9, title: 'Titulo Post Usuário 21 Parceiro 3', content: "Conteúdo Post Usuário 21 Parceiro 1", userId: "21", partnerId: "3"}
      ]);
    });
};
