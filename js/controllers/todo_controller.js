Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value) {
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('is_completed');
    } else {
      // property being used as a setter
      model.set('is_completed', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
