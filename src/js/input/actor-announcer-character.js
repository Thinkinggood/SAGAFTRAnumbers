(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery'], function($) {
    var ActorAnnouncerCharacter;
    ActorAnnouncerCharacter = (function() {

      function ActorAnnouncerCharacter(index) {
        this.index = index;
        this.html = "<p>\n  Actor/announcer " + (this.index + 1) + " will do\n  <input type=\"number\" name=\"actor-" + this.index + "-num-characters\" value=\"1\" min=\"1\" max=\"10\">\n  <a href=\"#character-voice\">character/voice</a>(s).\n</p>\n";
        this.$el = $(this.html);
        this.el = this.$el[0];
      }

      return ActorAnnouncerCharacter;

    })();
    return ActorAnnouncerCharacter;
  });

}).call(this);
