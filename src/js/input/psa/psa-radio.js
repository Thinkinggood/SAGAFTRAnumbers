(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/radio/actor-announcer-singer', 'input/version'], function($, _, ActorAnnouncerSinger, Version) {
    var PublicServiceAnnouncementRadio;
    PublicServiceAnnouncementRadio = (function() {

      function PublicServiceAnnouncementRadio() {
        var _this = this;
        this.label = "Public Service Announcement - Radio";
        this.steps = [new ActorAnnouncerSinger(), new Version()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      PublicServiceAnnouncementRadio.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return PublicServiceAnnouncementRadio;

    })();
    return PublicServiceAnnouncementRadio;
  });

}).call(this);
