(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery'], function($) {
    var Version;
    Version = (function() {

      function Version() {
        this.html = "<fieldset>\n  There is\n  <input type=\"number\" name=\"num-versions\" value=\"1\" min=\"1\" max=\"10\">\n  <a href=\"#version\">version</a>(s) of the script.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return Version;

    })();
    return Version;
  });

}).call(this);
