(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/television/day', 'input/television/use'], function($, _, Day, Use) {
    var TelevisionCommercialOnCamera;
    TelevisionCommercialOnCamera = (function() {

      function TelevisionCommercialOnCamera() {
        var _this = this;
        this.label = "Television Commercial - (On Camera)";
        this.steps = [new Day(), new Use()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      TelevisionCommercialOnCamera.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return TelevisionCommercialOnCamera;

    })();
    return TelevisionCommercialOnCamera;
  });

}).call(this);
