require('ispeak/controllers/url');

App.ChangeButton = Ember.View.extend({
  tagName: 'button',
  classNames: ['btn','addurl'],
  classNameBindings: ['btn'],
  urlBinding: 'controller.controllers.urlController.url',
  isActive: function() {
    var pages = this.get('pages');
    for(page in pages) {
      if(pages[page] ===  this.get('url')) return true;
    }
    return false;
  }.property('pages', 'url'), 
  btn: function(){
    return this.get('isActive') ? 'btn-inverse' : 'btn-success';
  }.property('isActive', 'url'),
  text: function() {
    return this.get('isActive') ? 'Delete' : 'Add';
  }.property('isActive', 'controllers.urlController.url'),
  template: Ember.Handlebars.compile('{{view.text}}'),
  click: function(event) {
    this._super(event);
    that = this;
    this.get('controller.content').changePagesInVideo(this.get('content'), this.get('isActive'), function(p) {
      that.set('content.pages', p)
    });
  }
});

