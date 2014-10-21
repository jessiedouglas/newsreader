NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function (id) {
    var model = this.get(id),
      feeds = this;

    if (model) {
      this.fetch();
    } else {
      model = new NewsReader.Models.Feed({ id: id });
      model.fetch({
        success: function () {
          feeds.add(model);
        }
      });
    }

    return model;
  },

});