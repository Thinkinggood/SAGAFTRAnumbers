(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore'], function($, _) {
    var DealerCommercial;
    DealerCommercial = (function() {

      function DealerCommercial() {
        this.label = "Dealer Commercial";
        this.html = "<fieldset>\n  Six month use.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return DealerCommercial;

    })();
    return DealerCommercial;
  });

}).call(this);
