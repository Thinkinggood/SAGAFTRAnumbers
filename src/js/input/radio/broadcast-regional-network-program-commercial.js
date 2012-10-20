(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore'], function($, _) {
    var RegionalNetworkProgramCommercial;
    RegionalNetworkProgramCommercial = (function() {

      function RegionalNetworkProgramCommercial() {
        this.label = "Regional Network Program Commercial";
        this.html = "<fieldset>\n  Thirteen week use.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return RegionalNetworkProgramCommercial;

    })();
    return RegionalNetworkProgramCommercial;
  });

}).call(this);
