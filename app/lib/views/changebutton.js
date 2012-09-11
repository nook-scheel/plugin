require('ispeak/controllers/url');

App.ChangeButton = Ember.View.extend({
  tagName: 'button',
  classNames: ['btn','addurl'],
  classNameBindings: ['btn'],
  btn: function(){
    var pages = this.get('content.pages');
    console.log(pages, this.get('url'));
    for(page in pages)
      if(pages[page] ===  this.get('url')) return 'btn-inverse';
    return 'btn-success';
  }.property('text'),
  text: function() {
    var pages = this.get('content.pages');
    for(page in pages) {
      if(pages[page] ===  this.get('url')) return 'Delete';
    }
    return 'Add';
  }.property('url', 'content.pages.@each'),
  template: Ember.Handlebars.compile('{{view.text}}'),
  click: function(event) {
      this._super(event);
//      this.set('btn', 'btn-inverse');
      this.get('controller.content').changePages(this.get('content'), this.get('btn') === 'btn-success');
//    var url = this.get('url');
//    var contentPages = this.get('content.pages');
//
//    var deletePages = contentPages.filter(function(item, index, self) {
//      if(item === url) return true;
//    });
//
//    if(deletePages.length > 0) {
//      var newContentPages = contentPages.filter(function(item, index, self) {
//        if(item === url) return false;
//        return true;
//      });
//      this.set('content.pages', newContentPages);
//    } else {
//      var newContentPages = contentPages;
//      newContentPages.push(url);
//      this.set('content.pages', newContentPages);
//    }
  }
});

