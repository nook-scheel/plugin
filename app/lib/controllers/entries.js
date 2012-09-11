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
  pageBinding: 'controllers.urlController.url',
  changePages: function(item, bool) {
    if(!bool) {
      this.addPage(item, page);
    } else {
      this.deletePage(item, page);
    }
  },
  addPage: function(item) {
    console.log('addPage');
  },
  deletePage: function(item) {
    console.log('deletePage');
  },
  remaining: function() {
    return this.filterProperty('completed', false).get('length');
  }.property('@each.completed'),
  init: function() {
    this._super();
    this.set('content', App.store.findAll(App.Video));
  }
});
