// Generated by CoffeeScript 1.4.0
(function() {
  var define, log, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'input/input', 'output/output'], function($, Input, Output) {
    var App;
    App = (function() {

      function App(el) {
        this.el = el;
        this.onChange = __bind(this.onChange, this);

        this.updateCount = 0;
        this.updateCountToCTA = 10;
        this.$el = $(this.el);
        this.input = new Input(this.$el.find('#input')[0]);
        this.output = new Output(this.$el.find('#output')[0]);
        this.input.$el.on('input change', this.output.onChange);
        this.$el.on('input change', this.onChange);
      }

      App.prototype.start = function() {};

      App.prototype.onChange = function(event) {
        this.$el.trigger('update');
        $('div.tooltip').filter(":visible").fadeOut(400);
        this.calcHeight();
        if (event.target.id === 'job-type') {
          this.updateCount = 0;
          $('#output-cta').fadeOut(400);
          $('#input-cta').fadeOut(400);
          return;
        }
        if (this.updateCount < this.updateCountToCTA) {
          this.updateCount++;
          if (this.updateCount === this.updateCountToCTA) {
            $('#output-cta').fadeIn(400);
            $('#input-cta').fadeIn(400);
            this.calcHeight();
          }
        }
      };

      App.prototype.calcHeight = function() {
        var height;
        height = Math.max(this.input.$el.css('height', 'auto').height(), this.output.$el.css('height', 'auto').height());
        this.input.$el.height(height);
        this.output.$el.height(height);
      };

      App.prototype.restart = function() {
        this.input.clear();
        return this.output.clear();
      };

      return App;

    })();
    return App;
  });

}).call(this);
