NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds/index'],

  events: {
    'click button.delete-feed': 'deleteFeed',
    'click button.add-feed': 'addFeed'
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync add destroy', this.render);
  },

  render: function() {
    var renderedContent = this.template({
      feeds: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  },

  deleteFeed: function (event) {
    var $currentTarget = $(event.currentTarget);
    var feed = this.collection.get($currentTarget.data("id"));

    feed.destroy({
      success: function () {
        alert("Feed destroyed :(");
        Backbone.history.navigate("", {trigger: true});
      }
    });
  },

  addFeed: function (event) {
    event.preventDefault();

    var attrs = $(event.target).parent().serializeJSON();
    var model = new this.collection.model();
    model.set(attrs.feed);

    this.collection.create(model, {
      success: function () {
        alert("Feed created :)");
        Backbone.history.navigate("", {trigger: true})
      },
      error: function (model, error) {
        console.log("failed!:" + error);
      },
      wait: true
    });

    if (model.validationError) {
      alert(model.validationError);
    }
  }

});