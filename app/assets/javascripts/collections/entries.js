NewsReader.Collections.Entries = Backbone.Collection.extend({

  model: NewsReader.Models.Entry,

  url: function() {
    return this.feed.url + "/entries"
  },

  initialize: function(options) {
    this.feed = options.feed
  },

  getOrFetch: function (id) {
    var model = this.get(id);
    var entries = this;

    if (model) {
      model.fetch();
    } else {
      model = new NewsReader.Models.Entries({ id: id });

      model.fetch({
        success: function () {
          entries.add(model);
        }
      });
    }

    return model;
  },

  comparator: function (model) {
    return -Date.parse(model.get("published_at"));
  }
});