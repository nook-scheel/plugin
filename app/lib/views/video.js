require('ispeak/core');
require('ispeak/controllers/video');

App.VideoView = Em.View.extend({
  templateName: 'ispeak/~templates/video',
  removeItem: function(event) {
    console.log(this.get('controller.pages'));
    this.get('controller.controllers.entriesController')
        .deletePageInVideo(this.get('controller'), event.context);
  },
  UrlAdd: Em.TextField.extend({
    valueBinding: Ember.Binding.oneWay('controller.controllers.urlController.url'),
    entriesBinding: 'controller.controllers.entriesController',
    placeholder: 'You url',
    elementId: 'prependedInput',
    insertNewline: function() {
      var value = this.get('value');
      if (value) {
        var that=this;
        this.get('entries').addPageInVideo(this.get('item'), this.get('value'), function(p){
          that.set('item', p)
        });
        this.set('value', '');
      }
    }
  })
});
