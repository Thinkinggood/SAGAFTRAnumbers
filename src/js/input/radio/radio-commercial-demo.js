// Generated by CoffeeScript 1.4.0
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery","underscore","input/radio/actor-announcer-singer","input/version"],function(e,t,n,r){var i;i=function(){function i(){var i=this;this.label="Radio Commercial Demo";this.value="radio_commercial_demo";this.steps=[new n,new r];this.el=[];t.each(this.steps,function(e,t){return i.el.push(e.el)});this.$el=e(this.el)}i.prototype.destroy=function(){return this.$el.off("**")};return i}();return i})}).call(this);