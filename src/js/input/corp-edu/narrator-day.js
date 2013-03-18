// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery'], function($) {
    var NarratorDay;
    NarratorDay = (function() {

      function NarratorDay(index) {
        this.index = index;
        this.html = "<p>\n	I'll need narrator/spokesperson " + this.index + " for\n	<input type=\"number\" name=\"narrator-" + this.index + "-num-days\" id=\"narrator-" + this.index + "-num-days\" class=\"num-days\" value=\"1\" min=\"1\" max=\"10\">\n	day(s).\n</p>\n";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return NarratorDay;

    })();
    return NarratorDay;
  });

}).call(this);
