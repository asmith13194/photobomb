"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable('photobomb_user', table => {
    table.increments('photobomb_user_id');
    table.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photobomb_user');
};
