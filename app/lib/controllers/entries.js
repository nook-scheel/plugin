require('ispeak/core');

App.EntriesController = Em.ArrayProxy.extend({
  contentBinding: 'controller.content',
  removeObject: function(item) {
    return this._super(item);
  },
  pageBinding: 'controllers.urlController.url',
  changePagesInVideo: function(video, bool, cl) {
    if(!bool) {
      console.log('add');
      this.addPageInVideo(video, false, cl);
    } else {
      console.log('delete');
      this.deletePageInVideo(video, false, cl);
    }
  },
  addPageInVideo: function(video, page, cl) {
    //this.deletePageInVideo(video, page, cl);
    var page = (!page) ? this.get('page') : page;
    var pages = video.get('pages');
    pages.push(page);

    if(typeof cl === 'function')
      cl(pages);
  },
  deletePageInVideo: function(video, page, cl) {
    // Удаление ссылки из видео
    var page = (!page) ? this.get('page') : page;
    var pages = video.get('pages').filter(function(p) {
      if(p === page) return false;
      return true;
    });

    if(typeof cl === 'function')
      cl(pages);

    // Удаление ссылки из всех видео
    App.store.findAll(App.Video).forEach(function(item) {
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
