
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts_users_feedbacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts_users_feedbacks').insert([
        {id: 1, postId: '1', addedBy: '1', comment: 'Feedback do Admin Partner 1 no post de ID 1'},
        {id: 2, postId: '2', addedBy: '2', comment: 'Feedback do Admin Partner 2 no post de ID 2'},
        {id: 3, postId: '3', addedBy: '3', comment: 'Feedback do Admin Partner 3 no post de ID 3'},
        {id: 4, postId: '4', addedBy: '4', comment: 'Feedback do Admin Partner 4 no post de ID 4'},
        {id: 5, postId: '5', addedBy: '5', comment: 'Feedback do Admin Partner 5 no post de ID 5'},
        {id: 6, postId: '6', addedBy: '6', comment: 'Feedback do Admin Partner 6 no post de ID 6'},
        {id: 7, postId: '7', addedBy: '7', comment: 'Feedback do Admin Partner 7 no post de ID 7'},
        {id: 8, postId: '8', addedBy: '8', comment: 'Feedback do Admin Partner 8 no post de ID 8'},
        {id: 9, postId: '9', addedBy: '9', comment: 'Feedback do Admin Partner 9 no post de ID 9'},
      ]);
    });
};
