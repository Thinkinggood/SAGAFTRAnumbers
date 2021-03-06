// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/corp-edu/category', 'input/corp-edu/principal-actor'], function($, _, Category, PrincipalActor) {
    var CorpEduOffCamera;
    CorpEduOffCamera = (function() {

      function CorpEduOffCamera() {
        var _this = this;
        this.label = "Corporate/Educational & Non-Broadcast - (Voiceover/Off Camera)";
        this.value = "corp_edu_off_camera";
        this.definitionId = "co-ed-contract";
        this.headsUpItems = ['Retakes', 'Multiple characters', 'Supplemental use'];
        this.steps = [new Category(), new PrincipalActor()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      CorpEduOffCamera.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return CorpEduOffCamera;

    })();
    return CorpEduOffCamera;
  });

}).call(this);
