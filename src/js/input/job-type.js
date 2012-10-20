(function() {
  var define, log, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  root = this;

  log = root.log;

  define = root.define;

  define(['jquery', 'underscore', 'input/radio/radio-commercial', 'input/radio/radio-commercial-demo', 'input/television/television-commercial-on-camera', 'input/television/television-commercial-off-camera', 'input/television/television-commercial-demo', 'input/psa/psa-radio', 'input/psa/psa-television-on-camera', 'input/psa/psa-television-off-camera', 'chosen'], function($, _, RadioCommercial, RadioCommercialDemo, TelevisionCommercialOnCamera, TelevisionCommercialOffCamera, TelevisionCommercialDemo, PublicServiceAnnouncementRadio, PublicServiceAnnouncementTelevisionOnCamera, PublicServiceAnnouncementTelevisionOffCamera) {
    var JobType;
    JobType = (function() {

      function JobType() {
        this.onChange = __bind(this.onChange, this);        this.html = "<fieldset>\n  I'm hiring for a\n  <select name=\"job-type\" id=\"job-type\" class=\"chzn-select\" data-placeholder=\"please choose your job\">\n    <option value=\"-1\"></option>\n  </select>.\n</fieldset>";
        this.$el = $(this.html);
        this.el = this.$el[0];
        this.setupOptions();
        this.$el.on('change', '#job-type', this.onChange);
      }

      JobType.prototype.setupOptions = function() {
        var html;
        this.selectedIndex = -1;
        this.selectedItem = null;
        this.options = [new RadioCommercial(), new RadioCommercialDemo(), new TelevisionCommercialOnCamera(), new TelevisionCommercialOffCamera(), new TelevisionCommercialDemo(), new PublicServiceAnnouncementRadio(), new PublicServiceAnnouncementTelevisionOnCamera(), new PublicServiceAnnouncementTelevisionOffCamera()];
        html = '';
        _.each(this.options, function(el, i) {
          return html += "<option value=\"" + i + "\">" + el.label + "</option>";
        });
        return this.$el.find('select').append(html);
      };

      JobType.prototype.onChange = function(event) {
        log(event);
        this.selectedIndex = parseInt(event.target.value, 10);
        this.selectedItem = this.selectedIndex !== -1 ? this.options[this.selectedIndex] : null;
        this.$el.siblings().detach();
        if (this.selectedItem != null) {
          this.$el.afterPolyfill(this.selectedItem.$el);
          return this.selectedItem.$el.find('#num-days').trigger('input');
        }
      };

      return JobType;

    })();
    return JobType;
  });

}).call(this);
