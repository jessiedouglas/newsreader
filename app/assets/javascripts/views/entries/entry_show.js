NewsReader.Views.EntryShow = Backbone.View.extend({

  tagName: 'li',

  template: JST['entries/list_item'],

  render: function () {
    var renderedContent = this.template({ entry: this.model });
    this.$el.html(renderedContent);
    return this;
  }


});