NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    'click button.refresh': 'refresh'
  },

  template: JST["feeds/show"],

  render: function () {
    var renderedContent = this.template({
      feed: this.model
    });

    this.$el.html(renderedContent);

    var that = this;

    this.model.entries().each(function (entry) {
      var view = new NewsReader.Views.EntryShow({ model: entry });
      that.$el.find(".entry-list").append(view.render().$el);
    });

    return this;
  },

  refresh: function () {
    this.model.fetch();
    this.render();
  }
});