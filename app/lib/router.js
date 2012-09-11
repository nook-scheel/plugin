require('ispeak/core');

App.Router = Ember.Router.extend({
  enableLogging: false,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      connectOutlets: function( router ) {
        var controller = router.get('applicationController');
        //var content =  App.store.findAll(App.Video);
        //var videosController = router.get('videosController');
        //videosController.set('content', content);
        //var context = router.get('entriesController');
        var context = router.get('entriesController');
        window.controller = controller;
        controller.connectOutlet('videos', context);
      }
    })
  })
});
