
exports.up = function(knex) {
    return knex.schema
        .createTable("partners", function (table) {
            table.text("id");
            table.text("name").notNullable();
            table.boolean("blocked").notNullable().defaultTo(false);
            table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
            table.timestamp("updatedAt");
            table.timestamp("deletedAt");
            table.timestamp("dueDate").notNullable();
            table.primary(["id"]);
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("partners");
};
