// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","underscore"],function(e,t){var n;n=function(){function n(){this.onChange=r(this.onChange,this);this.html='<fieldset>\n	It\'s a\n	<select name="category" id="category" class="chzn-select" data-placeholder="please choose...">\n		<!-- USER MUST CHOOSE A CATEGORY! -->\n		<!-- <option value="-1"></option> -->\n	</select>\n	program.\n</fieldset>';this.$el=e(this.html);this.el=this.$el[0];this.setupOptions();this.$el.on("change","#category",this.onChange)}n.prototype.setupOptions=function(){var e;this.selectedIndex=-1;this.selectedItem=null;this.options=["Category I","Category II"];e="";t.each(this.options,function(t,n){return e+='<option value="'+(n+1)+'">'+t+"</option>"});return this.$el.find("select").append(e)};n.prototype.getSelectedItem=function(){return this.selectedItem};n.prototype.onChange=function(e){this.selectedIndex=parseInt(e.target.value,10);return this.selectedItem=this.selectedIndex!==-1?this.options[this.selectedIndex]:null};return n}();return n})}).call(this);