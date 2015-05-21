// An object to help handle events and rerender
var ui = {
  afterFilters: [],

  afterUIEvent: function (fn) {
    this.afterFilters.push(fn);
  },

  refresh: function () {
    this.afterFilters.forEach(function (filter) {
      filter();
    });
  },

  when: function (cssClass, evt, fn) {
    var callback = fn || evt,
        eventName = fn ? evt : 'click',
        me = this;

    document.querySelector('main').addEventListener(eventName, function (e) {
      if ((e.target.className || '').indexOf(cssClass) >= 0) {
        callback(e);
        me.refresh();
      }
    });
  }
};
