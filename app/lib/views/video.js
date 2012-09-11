require('ispeak/core');
require('ispeak/controllers/video');

App.VideoView = Em.View.extend({
  templateName: 'ispeak/~templates/video',
  removeItem: function(event) {
    this.get('controller.controllers.entriesController')
        .deletePage(event.context);
  },
  UrlAdd: Em.TextField.extend({
    valueBinding: Ember.Binding.oneWay('controller.controllers.urlController.url'),
    entriesBinding: 'controller.controllers.entriesController',
    placeholder: 'You url',
    elementId: 'prependedInput',
    insertNewline: function() {
      var value = this.get('value');
      if (value) {
        console.log(123);
        this.get('entries').addPage(this.get('item'), this.get('value'));
        this.set('value', '');
      }
    }
  })
});
