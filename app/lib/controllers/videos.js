require('ispeak/core');

App.VideosController = Em.ArrayController.extend({
  init: function() {
    this._super();
    //this.set('content');
  },
  entries: function() {
    var filter = this.get('content.filterBy');
    if(Em.empty(filter)) {
      return this.get('content');
    }
    if(Em.empty(filter, 'archive')) {
      return this.get('content').filterProperty('archive', true);
    }
  }.property('content.@each', 'content.remaining', 'content.filterBy')
});
