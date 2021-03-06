// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/corp-edu/category-audio-only', 'input/corp-edu/principal-actor-audio-only'], function($, _, CategoryAudioOnly, PrincipalActorAudioOnly) {
    var CorpEduAudioOnly;
    CorpEduAudioOnly = (function() {

      function CorpEduAudioOnly() {
        var _this = this;
        this.label = "Corporate/Educational & Non-Broadcast - (Audio Only)";
        this.value = "corp_edu_audio_only";
        this.definitionId = "co-ed-contract";
        this.headsUpItems = ['Retakes', 'Multiple characters'];
        this.steps = [new CategoryAudioOnly(), new PrincipalActorAudioOnly()];
        this.el = [];
        _.each(this.steps, function(el, i) {
          return _this.el.push(el.el);
        });
        this.$el = $(this.el);
      }

      CorpEduAudioOnly.prototype.destroy = function() {
        return this.$el.off("**");
      };

      return CorpEduAudioOnly;

    })();
    return CorpEduAudioOnly;
  });

}).call(this);
