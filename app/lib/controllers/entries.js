require('ispeak/core');

App.EntriesController = Em.ArrayProxy.extend({
  contentBinding: 'controller.content',
  removeObject: function(item) {
    //this.get('controller.content').removeObject(
    //  event.context
    //);
    //console.log(event);
    return this._super(item);
  },
  remaining: function() {
    return this.filterProperty('completed', false).get('length');
  }.property('@each.completed'),
  init: function() {
    this._super();
    this.set('content', App.store.findAll(App.Video));
  }
});
