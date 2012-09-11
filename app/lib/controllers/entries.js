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
      this.addPage(item);
    } else {
      this.deletePage(item);
    }
  },
  addPage: function(item) {
    // Delete content page
    this.deletePage();

    // Add url
    var pages = item.get('pages');
    pages.push(this.get('page'));
    item.set('pages', pages);
  },
  deletePage: function(item) {
    var page = this.get('page');
    this.get('content').forEach(function(item) {
      var pages = item.get('pages').filter(function(p) {
        if(p === page) return false;
        return true;
      });
      item.set('pages', pages);
    });
    //console.log('deletePage');
  },
  remaining: function() {
    return this.filterProperty('completed', false).get('length');
  }.property('@each.completed'),
  init: function() {
    this._super();
    this.set('content', App.store.findAll(App.Video));
  }
});
