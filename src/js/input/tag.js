(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery'], function($) {
    var Tag;
    Tag = (function() {

      function Tag() {
        this.html = "<fieldset>\n  I'll need\n  <input type=\"number\" name=\"num-tags\" value=\"0\" min=\"0\">\n  <a href=\"#tag\">tag</a>(s) for this commercial.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return Tag;

    })();
    return Tag;
  });

}).call(this);
