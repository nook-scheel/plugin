App.UrlController = Ember.ObjectController.extend({
  init: function() {
    this._super();
    console.log('init');
    console.log(this.get('url'));
  },
  url: 'http://mysite.ru/blog/'
});
