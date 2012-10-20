(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore'], function($, _) {
    var Internet8Week;
    Internet8Week = (function() {

      function Internet8Week() {
        this.label = "8 Week Option";
        this.html = "<!-- NO OP -->";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return Internet8Week;

    })();
    return Internet8Week;
  });

}).call(this);
