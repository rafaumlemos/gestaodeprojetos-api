
exports.up = function(knex) {
    return knex.schema
        .createTable("posts_users_feedbacks", function (table) {
            table.text("id");
            table.text("postId").notNullable();
            table.text("addedBy").notNullable();
            table.text("comment").notNullable();
            table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
            table.timestamp("updatedAt");
            table.timestamp("deletedAt");
            table.primary(["id"]);
            table.foreign("postId").references("posts_users.id");
            table.foreign("addedBy").references("partners_admin.id");
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts_users_feedbacks");
};