
exports.up = function(knex) {
    return knex.schema
        .createTable("posts_partners_feedbacks", function (table) {
            table.text("id");
            table.text("postId").notNullable();
            table.text("addedBy").notNullable();
            table.text("comment").notNullable();
            table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
            table.timestamp("updatedAt");
            table.timestamp("deletedAt");
            table.primary(["id"]);
            table.foreign("postId").references("posts_partners.id");
            table.foreign("addedBy").references("users.id");
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts_partners_feedbacks");
};