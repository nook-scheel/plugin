require('ispeak/core');

App.EntriesController = Em.ArrayProxy.extend({
  contentBinding: 'controller.content',
  removeObject: function(item) {
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
  addPage: function(item, page) {
    var page = (!page) ? this.get('page') : page;
    console.log(page);
    this.deletePage(page);
    var pages = item.get('pages');
    pages.push(page);
    item.set('pages', pages);
  },
  deletePage: function(page) {
    var page = (!page) ? this.get('page') : page;
    this.forEach(function(item) {
      var pages = item.get('pages').filter(function(p) {
        if(p === page) return false;
        return true;
      });
      item.set('pages', pages);
    });
  },
  remaining: function() {
    return this.filterProperty('completed', false).get('length');
  }.property('@each.completed'),
  init: function() {
    this._super();
    this.set('content', App.store.findAll(App.Video));
  }
});
