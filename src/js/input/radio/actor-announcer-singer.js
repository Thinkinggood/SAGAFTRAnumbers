// Generated by CoffeeScript 1.3.3
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","input/actor-announcer-character","touchable/draggable-number"],function(e,t,n){var i;i=function(){function n(){this.onInputSingers=r(this.onInputSingers,this);this.onInputActors=r(this.onInputActors,this);this.html='<fieldset>\n  I\'ll need\n  <input type="number" name="num-actors" id="num-actors" value="0" min="0" max="10">\n  <a href="#actor-announcer" class="term open">actor/announcer</a>(s) and\n  <input type="number" name="num-singers" id="num-singers" value="0" min="0" max="2">\n  <a href="#singer" class="term open">singer</a>(s).\n  <span style="display: none;" id="more-singers">\n    Looking for more singers?\n    <a href="mailto:togren@sagaftra.org?subject=SAG-AFTRAnumbers%20Question">Contact Tim at SAG-AFTRA</a>!\n  </span>\n</fieldset>';this.$el=e(this.html);this.el=this.$el[0];this.actors=[];this.$el.on("input change","#num-actors",this.onInputActors);this.$el.on("input change","#num-singers",this.onInputSingers)}n.prototype.onInputActors=function(e){var n,r,i,s;r=parseInt(e.target.value,10);if(r===this.actors.length)return;if(r>this.actors.length){i=[];while(this.actors.length<r){n=new t(this.actors.length);this.actors.push(n);i.push(this.$el.appendPolyfill(n.$el))}return i}s=[];while(this.actors.length>r)s.push(this.actors.pop().$el.remove());return s};n.prototype.onInputSingers=function(t){return t.target.value===e(t.target).attr("max")?this.$el.find("#more-singers").filter(":hidden").show():this.$el.find("#more-singers").filter(":visible").hide()};return n}();return i})}).call(this);