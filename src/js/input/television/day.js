// Generated by CoffeeScript 1.6.1
(function() {
  var define, log, root;

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'input/television/principal-actor-general-extra'], function($, PrincipalActorGeneralExtra) {
    var Day,
      _this = this;
    Day = (function() {

      function Day() {
        var _this = this;
        this.onInputDays = function(event) {
          return Day.prototype.onInputDays.apply(_this, arguments);
        };
        this.html = "<fieldset>\n  It's a\n  <input type=\"number\" name=\"num-days\" id=\"num-days\" value=\"1\" min=\"1\" max=\"2\">\n  day shoot.\n  <span style=\"display: none;\" id=\"more-days\">\n    Looking for longer shoots?\n    <a href=\"mailto:togren@sagaftra.org?subject=SAG-AFTRAnumbers%20Question\">Contact Tim at SAG-AFTRA</a>!\n  </span>\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.performers = [];
        this.$el.on('input change', '#num-days', this.onInputDays);
      }

      Day.prototype.onInputDays = function(event) {
        var numPerformers, performer;
        numPerformers = parseInt(event.target.value, 10);
        if (numPerformers === this.performers.length) {
          return;
        }
        if (numPerformers > this.performers.length) {
          while (this.performers.length < numPerformers) {
            performer = new PrincipalActorGeneralExtra(this.performers.length + 1);
            this.performers.push(performer);
            this.$el.appendPolyfill(performer.$el);
          }
        } else {
          while (this.performers.length > numPerformers) {
            this.performers.pop().$el.remove();
          }
        }
        if (event.target.value === $(event.target).attr('max')) {
          return this.$el.find('#more-days').filter(":hidden").show();
        } else {
          return this.$el.find('#more-days').filter(":visible").hide();
        }
      };

      return Day;

    })();
    return Day;
  });

}).call(this);
