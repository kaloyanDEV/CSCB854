'use strict';


var mongoose = require('mongoose'),
  Entity = mongoose.model('Entities');

exports.list_all_entities = function(req, res) {
  Entity.find({}, function(err, entity) {
    if (err)
      res.send(err);
    res.json(entity);
  });
};


exports.create_a_entity = function(req, res) {
  var new_entity = new Entity(req.body);
  new_entity.save(function(err, entity) {
    if (err)
      res.send(err);
    res.json(entity);
  });
};


exports.read_a_entity = function(req, res) {
  Entity.findById(req.params.entityId, function(err, entity) {
    if (err)
      res.send(err);
    res.json(entity);
  });
};


exports.update_a_entity = function(req, res) {
  Entity.findOneAndUpdate({_id: req.params.entityId}, req.body, {new: true}, function(err, entity) {
    if (err)
      res.send(err);
    res.json(entity);
  });
};


exports.delete_a_entity = function(req, res) {
  Entity.remove({
    _id: req.params.entityId
  }, function(err, entity) {
    if (err)
      res.send(err);
    res.json({ message: 'Entity successfully deleted' });
  });
};
