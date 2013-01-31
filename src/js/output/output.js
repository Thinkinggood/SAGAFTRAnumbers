// Generated by CoffeeScript 1.4.0
(function(){var e,t,n,r=function(e,t){return function(){return e.apply(t,arguments)}};n=this;t=n.log;e=n.define;e(["jquery","output/estimator","output/radio","output/television","output/psa","output/corp-edu"],function(e,t,i,s,o,u){var a;a=function(){function a(n){this.el=n;this.onChange=r(this.onChange,this);this.$el=e(this.el);this.sessionFeesEstimator=new t("Session Fees Subtotal","session-fees");this.usageFeesEstimator=new t("Usage Fees Subtotal","usage-fees");this.type="none"}a.prototype.clear=function(){return this.$el.find("tbody").remove()};a.prototype.onChange=function(t){var r,i,s,o,u,a,f;r=e(t.target);if(r.is("#job-type")){f=r.find("[value="+r.val()+"]").data("value");if(this.type!==f){this.type=f;this.rates=n.sag_aftra_rates[this.type]}}this.clear();this.html="";this.cost=0;this.type!=="none"&&this[this.type]();this.$el.find("thead").after(this.html);i=this.cost*.1;u=this.cost+i;s=u*.155;o=u*.14;a=u+s+o;e("#estimate-agents-10 .amount").text(i.toFixed(2));e("#subtotal .amount").text(u.toFixed(2));e("#estimate-hr-ph .amount").text(s.toFixed(2));e("#estimate-payroll-taxes .amount").text(o.toFixed(2));e("#total .amount").text(a.toFixed(2));e("#hud-total .amount").text(a.toFixed(2));this.$el.trigger("change")};a.prototype.radio_commercial=function(){this.sessionFeesEstimator.estimate(i.sessionLineItems(this.rates));this.usageFeesEstimator.estimate(i.usageLineItems(this.rates));this.html=this.sessionFeesEstimator.html+this.usageFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost+this.usageFeesEstimator.cost};a.prototype.radio_commercial_demo=function(){this.sessionFeesEstimator.estimate(i.sessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.television_commercial_on_camera=function(){this.sessionFeesEstimator.estimate(s.onCameraSessionLineItems(this.rates));this.usageFeesEstimator.estimate(s.usageLineItems(this.rates));this.html=this.sessionFeesEstimator.html+this.usageFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost+this.usageFeesEstimator.cost};a.prototype.television_commercial_off_camera=function(){this.sessionFeesEstimator.estimate(s.offCameraSessionLineItems(this.rates));this.usageFeesEstimator.estimate(s.usageLineItems(this.rates));this.html=this.sessionFeesEstimator.html+this.usageFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost+this.usageFeesEstimator.cost};a.prototype.television_commercial_demo=function(){this.sessionFeesEstimator.estimate(s.demoSessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.psa_radio=function(){this.sessionFeesEstimator.estimate(o.radioSessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.psa_television_on_camera=function(){this.sessionFeesEstimator.estimate(o.tvOnCameraSessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.psa_television_off_camera=function(){this.sessionFeesEstimator.estimate(o.tvOffCameraSessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.corp_edu_on_camera=function(){this.sessionFeesEstimator.estimate(u.onCameraSessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.corp_edu_off_camera=function(){this.sessionFeesEstimator.estimate(u.offCameraSessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};a.prototype.corp_edu_audio_only=function(){this.sessionFeesEstimator.estimate(u.audioOnlySessionLineItems(this.rates));this.html=this.sessionFeesEstimator.html;this.cost=this.sessionFeesEstimator.cost};return a}();return a})}).call(this);