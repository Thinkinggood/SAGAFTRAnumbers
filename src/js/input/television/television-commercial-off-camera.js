(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/television/principal-actor', 'input/version', 'input/tag', 'input/television/use'], function($, _, PrincipalActor, Version, Tag, Use) {
    var TelevisionCommercialOffCamera;
    TelevisionCommercialOffCamera = (function() {

      function TelevisionCommercialOffCamera() {
        var _this = this;
        this.label = "Television Commercial - (Voiceover/Off Camera)";
        this.steps = [new PrincipalActor(), new Version(), new Tag(), new Use()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      TelevisionCommercialOffCamera.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return TelevisionCommercialOffCamera;

    })();
    return TelevisionCommercialOffCamera;
  });

}).call(this);
