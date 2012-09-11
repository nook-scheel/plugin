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
  changePages: function(item, bool) {
    var page = this.get('controllers.urlController.url');
    //var contentPages = item.get('pages');
    //console.log(contentPages);
    if(bool) {
      this.addPage(item, page);
    } else {
      this.deletePage(item, page);
    }
  },
  addPage: function(item, page) {
    console.log('addPage');
  },
  deletePage: function(item, page) {
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
