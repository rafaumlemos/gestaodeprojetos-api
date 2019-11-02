
exports.up = function(knex) {
    return knex.schema
        .createTable("posts_users", function (table) {
            table.text("id");
            table.text("title").notNullable();
            table.text("content").notNullable();
            table.text("image").defaultTo(null);
            table.text("userId").notNullable();
            table.text("partnerId").notNullable();
            table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
            table.timestamp("updatedAt");
            table.timestamp("deletedAt");
            table.primary(["id"]);
            table.foreign("partnerId").references("partners.id");
            table.foreign("userId").references("users.id");
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts_users");
};