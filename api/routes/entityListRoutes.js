'use strict';
module.exports = function(app) {
  var entityList = require('../controllers/entityListController');

  // todoList Routes
  app.route('/api/tg-entities')
    .get(entityList.list_all_entities)
    .post(entityList.create_a_entity)
    .put(entityList.update_a_entity);


  app.route('/api/tg-entities/:entityId')
    .get(entityList.read_a_entity)
    .delete(entityList.delete_a_entity);
};
