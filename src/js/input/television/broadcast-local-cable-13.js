(function() {
  var define, log, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore'], function($, _) {
    var LocalCable13;
    LocalCable13 = (function() {

      function LocalCable13() {
        this.onChange = __bind(this.onChange, this);        this.label = "Local Cable - 13 week cycle";
        this.html = "<fieldset>\n  It will be broadcast on a local station with\n  <select name=\"subscribers\" id=\"subscribers\" class=\"chzn-select\" data-placeholder=\"please choose...\">\n    <option value=\"-1\"></option>\n  </select>\n  subscribers.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.setupOptions();
        this.$el.on('change', '#subscribers', this.onChange);
      }

      LocalCable13.prototype.setupOptions = function() {
        var html;
        this.selectedIndex = -1;
        this.selectedItem = null;
        this.options = [];
        html = '';
        _.each(this.options, function(el, i) {
          return html += "<option value=\"" + i + "\">" + el + "</option>";
        });
        return this.$el.find('select').append(this.options);
      };

      LocalCable13.prototype.getSelectedItem = function() {
        return this.selectedItem;
      };

      LocalCable13.prototype.onChange = function(event) {
        this.selectedIndex = parseInt(event.target.value, 10);
        return this.selectedItem = this.selectedIndex !== -1 ? this.options[this.selectedIndex] : null;
      };

      return LocalCable13;

    })();
    return LocalCable13;
  });

}).call(this);
