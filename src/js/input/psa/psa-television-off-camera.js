(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/television/principal-actor', 'input/version', 'input/tag'], function($, _, PrincipalActor, Version, Tag) {
    var PublicServiceAnnouncementTelevisionOffCamera;
    PublicServiceAnnouncementTelevisionOffCamera = (function() {

      function PublicServiceAnnouncementTelevisionOffCamera() {
        var _this = this;
        this.label = "Public Service Announcement - Television (Off Camera)";
        this.steps = [new PrincipalActor(), new Version(), new Tag()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      PublicServiceAnnouncementTelevisionOffCamera.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return PublicServiceAnnouncementTelevisionOffCamera;

    })();
    return PublicServiceAnnouncementTelevisionOffCamera;
  });

}).call(this);
