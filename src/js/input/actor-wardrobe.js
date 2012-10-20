(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery'], function($) {
    var ActorWardrobe;
    ActorWardrobe = (function() {

      function ActorWardrobe(index) {
        this.index = index;
        this.html = "<li>\n  <input type=\"checkbox\" name=\"actor-" + this.index + "-wardrobe-fitting\" value=\"1\" checked>\n  wardrobe fitting for principal actor " + (this.index + 1) + ".\n</li>";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return ActorWardrobe;

    })();
    return ActorWardrobe;
  });

}).call(this);
