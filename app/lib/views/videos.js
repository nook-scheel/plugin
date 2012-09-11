require('ispeak/core');

App.VideosView = Em.View.extend({
  //contentBinding: 'App.VideosController.controller',
  tagName: 'ul',
  classNames: ['nav', 'nav-tabs', 'nav-stacked'],
  templateName: 'ispeak/~templates/video',
  removeItem: function(event) {
    //console.log(this.get('content.name'));
    //App.store.createRecord(App.Video, {
    //  name: 'Blog video',
    //  filename: 'file_name_video3',
    //  status: 'active',
    //  pages: ['http://mysite.ru/blog/', 'http://mysite.ru/live/']
    //});

    //var video = App.store.find(App.Video, this.get('content.id'));
    //video.deleteRecord();
    //App.store.commit();
    //this.removeObject();
    console.log(event.context);
    this.get('controller.content').removeObject(
      event.context
    );
  }
});
