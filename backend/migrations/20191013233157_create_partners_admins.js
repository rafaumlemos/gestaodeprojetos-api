
exports.up = function(knex) {
    return knex.schema
        .createTable("partners_admin", function (table) {
            table.text("id");
            table.text("name").notNullable();
            table.text("phone").notNullable();
            table.text("email").notNullable();
            table.text("password").notNullable();
            table.text("partnerId").notNullable();
            table.boolean("blocked").notNullable().defaultTo(false);
            table.timestamp("dueDate").notNullable();
            table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
            table.timestamp("updatedAt");
            table.timestamp("deletedAt");
            table.primary(["id"]);
            table.foreign("partnerId").references("partners.id");
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable("partners_admin");
};
