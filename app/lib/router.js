require('ispeak/core');

App.Router = Ember.Router.extend({
  enableLogging: false,

  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/',
      enter: function(router, event) {
        router.transitionTo('videos.index', event);
      }
    }),
    videos: Ember.Route.extend({
      route: '/videos',
      index: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router, event) {
          var controller = router.get('applicationController');
          var context = router.get('entriesController');
          controller.connectOutlet('videos', context);
        }
      }),
      video: Ember.Route.extend({
        route: '/:video_id',
        connectOutlets: function(router, context) {
          var video = App.store.find(App.Video, context.get('id'));
          router.get('entriesController').set('content', video);
          router.get('applicationController').connectOutlet('video');
        }
      })
    }),
    chart: Em.Route.extend({
      route: '/chart'
    }),
    help: Em.Route.extend({
      route: '/help',
    }),
    doVideo: function(router, event) {
      router.transitionTo('videos.video', event.context);
    },
    doVideos: function(router, event) {
      router.transitionTo('root.index');
    },
    doChart: function(router, event) {
      router.transitionTo('root.chart');
    },
    doHelp: function(router, event) {
      router.transitionTo('root.help');
    }
  })
});
