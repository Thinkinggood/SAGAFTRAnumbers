(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore'], function($, _) {
    var NetworkProgramCommercial;
    NetworkProgramCommercial = (function() {

      function NetworkProgramCommercial() {
        this.label = "Network Program Commercial";
        this.html = "<fieldset>\n  In over 20 cities, with <input type=\"number\" name=\"num-uses\" id=\"num-uses\" value=\"1\" min=\"1\"> uses.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return NetworkProgramCommercial;

    })();
    return NetworkProgramCommercial;
  });

}).call(this);
