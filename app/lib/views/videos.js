require('ispeak/core');

App.VideosView = Em.View.extend({
  tagName: 'ul',
  classNames: ['nav', 'nav-tabs', 'nav-stacked'],
  templateName: 'ispeak/~templates/videos',
  removeItem: function(event) {
    this.get('controller.content').removeObject(
      event.context
    );
  }
});
