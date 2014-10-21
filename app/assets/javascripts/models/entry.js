NewsReader.Models.Entry = Backbone.Model.extend({

  rootUrl: function(){
    return this.feed.url + '/entries'
  },

  initialize: function(options) {
    this.feed = options.feed
  },


});