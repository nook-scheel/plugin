require('ispeak/core');

App.VideosView = Em.View.extend({
  tagName: 'ul',
  classNames: ['nav', 'nav-tabs', 'nav-stacked'],
  templateName: 'ispeak/~templates/videos',
  urlBinding: 'controller.controllers.urlController.url',
  isActive: function() {
    var pages = this.get('content.pages');
    for(page in pages)
      if(pages[page] ===  this.get('url')) return true;
    return false;
  }.property('content.pages.@each', 'url'), 
  btn: function(){
    return this.get('isActive') ? 'btn-inverse' : 'btn-success';
  }.property('isActive', 'url'),
  text: function() {
    return this.get('isActive') ? 'Delete' : 'Add';
  }.property('isActive', 'controllers.urlController.url'),
  removeItem: function(event) {
    this.get('controller.content').removeObject(
      event.context
    );
  }
});
