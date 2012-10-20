(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/radio/actor-announcer-singer', 'input/version'], function($, _, ActorAnnouncerSinger, Version) {
    var RadioCommercialUse;
    RadioCommercialUse = (function() {

      function RadioCommercialUse() {
        var _this = this;
        this.label = "Radio Commercial Demo";
        this.steps = [new ActorAnnouncerSinger(), new Version()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      RadioCommercialUse.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return RadioCommercialUse;

    })();
    return RadioCommercialUse;
  });

}).call(this);
