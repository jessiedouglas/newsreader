NewsReader.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "feeds/:id": "feedShow"
  },

  index: function () {
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    this._swapView(indexView);
  },

  feedShow: function (id) {
    var showView = new NewsReader.Views.FeedShow({
      model: NewsReader.feeds.getOrFetch(id)
    })

    this._swapView(showView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
})