Todos.EditTodoView = Ember.TextField.extend({
  classNames: ['edit'],

  insertNewline: function() {
    console.log('sss')
    this.get('controller').acceptChanges();
  },

  focusOut: function() {
    console.log('ddd')
    this.get('controller').acceptChanges();
  },

  didInsertElement: function() {
    console.log('aaa')
    this.$().focus();
  }
});
