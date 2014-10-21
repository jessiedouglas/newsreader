NewsReader.Models.Feed = Backbone.Model.extend({
  validate: function (attributes) {
    if (!attributes || !attributes.url || attributes.url == "") {
      return "cannot have an empty URL";
    }
  },

  urlRoot: "api/feeds",

  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries({ feed: this });
    }

    return this._entries;
  },

  parse: function (response) {
    if (response.latest_entries) {
      this.entries().set(response.latest_entries, {parse: true} );
      delete response.latest_entries;
    }

    return response;
  },
});