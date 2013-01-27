// Generated by CoffeeScript 1.4.0

/*
    Author: Matt Hayes
*/


(function() {
  var log, require, root;

  root = this;

  log = root.log;

  require = root.require;

  require.config({
    paths: {
      'jquery': 'libs/jquery-1.7.1',
      'underscore': 'libs/underscore-1.3.2',
      'chosen': 'plugins/chosen/chosen.jquery',
      'order': 'plugins/order-1.0.5'
    }
  });

  require(['order!jquery', 'order!app', 'order!chosen'], function(jQuery, App) {
    var $;
    $ = jQuery;
    $(function() {
      var $app, $document, $window, app, onClickDefinitions, onClickLogo, onClickShare, onClickStart, onClickStartOver, onClickTerm, onUpdate, updateCount, updateCountToCTA;
      $window = $(window);
      $document = $(document);
      $app = $('#app');
      app = new App($app[0]);
      updateCount = 0;
      updateCountToCTA = 10;
      $('.chzn-select').not('.chzn-done').chosen({
        allow_single_deselect: true,
        disable_search_threshold: 20
      });
      onClickStartOver = function(event) {
        event.preventDefault();
        app.restart();
      };
      onClickStart = function(event) {
        event.preventDefault();
        $('.hud .start, .calculator .both').fadeOut(400);
        $('.hud .estimate, .hud h5, nav li').fadeIn(400);
        $('footer h3, footer h4, footer address').show(400, function() {
          if (!$('.page').hasClass('home')) {
            return null;
          }
          $('.page').removeClass('home');
          return app.start();
        });
      };
      onClickShare = function(event) {
        var $targ, url;
        $targ = $(event.target);
        url = $targ.attr('href');
        url = url.substr(0, url.indexOf('body=') + 5);
        $('#output tr').each(function(i, el) {
          var $el, amount, isFirst, isHeader, isLast, isSubtotal, isTotal, label, line, tab;
          $el = $(el);
          line = '%0A';
          tab = '%09';
          isHeader = $el.find('th').size() > 0;
          isFirst = $el.parent().is('thead');
          isSubtotal = $el.parent().is('.session-fees-subtotal') || $el.parent().is('.usage-fees-subtotal');
          isTotal = $el.is('#subtotal') || $el.is('#total');
          isLast = $el.parent().is('tfoot');
          label = isHeader ? isFirst ? encodeURIComponent($el.find('th').text().toUpperCase()) : isSubtotal ? line + encodeURIComponent($el.find('.label').text()) : isLast ? line + encodeURIComponent('*' + $el.find('.label').text() + '*') : line + encodeURIComponent('*' + $el.find('th').text() + '*') : tab + encodeURIComponent($el.find('.label').text());
          amount = encodeURIComponent($el.find('.amount').text());
          log(amount, isHeader);
          if (isSubtotal) {
            url += line + '------------------------------';
          }
          url += label;
          if (!(isHeader && !isSubtotal && !isLast)) {
            url += tab + amount;
          }
          url += line;
          if (isSubtotal) {
            return url += '------------------------------' + line;
          }
        });
        $targ.attr('href', url);
      };
      onClickLogo = function(event) {
        event.preventDefault();
        $('.page').addClass('home');
        $('.hud .start, #splash').fadeIn(400);
        $('.hud .estimate, .hud h5, nav li').fadeOut(400);
        $('footer h3, footer h4, footer address').hide(400);
      };
      onClickDefinitions = function(event) {
        var $targ;
        event.preventDefault();
        $targ = $(this.hash);
        if ($targ.is(':visible')) {
          $(this.hash + '-overlay').fadeOut(400);
          $targ.fadeOut(400);
        } else {
          $(this.hash + '-overlay').fadeIn(400);
          $targ.fadeIn(400);
        }
        $('#tooltip-left').fadeOut(400);
        $('#tooltip-right').fadeOut(400);
      };
      onClickTerm = function(event) {
        var $targ, $term, $this, left, newLeft, newTop, side, top;
        event.preventDefault();
        $this = $(this);
        $term = $(this.hash);
        side = '#tooltip-' + ($this.closest('.inner').hasClass('left') ? 'left' : 'right');
        $targ = $(side);
        if (this.hash === side) {
          $targ.fadeOut(400);
          return;
        }
        top = ($this.position().top + $this.height() + 14) | 0;
        left = ($this.position().left + ($this.width() / 2) - 46) | 0;
        if ($targ.find(this.hash).length) {
          newTop = $targ.position().top !== top;
          newLeft = $targ.find('.pointer').position().left !== left;
          if (newTop || newLeft) {
            $targ.css('top', top).find('.pointer').css('left', left).end().fadeIn(400);
            return;
          }
          if ($targ.is(':visible')) {
            $targ.fadeOut(400);
          } else {
            $targ.fadeIn(400);
          }
          return;
        }
        $targ.find('.content').empty().append($term.clone()).end().css('top', top).find('.pointer').css('left', left).end();
        if (!$targ.is(':visible')) {
          $targ.fadeIn(400);
        }
      };
      onUpdate = function(event) {};
      $document.on('click', '.definitions.open, .definitions.close', onClickDefinitions).on('click', '.term.open, .term.close', onClickTerm).on('click', '.start-over a', onClickStartOver).on('click', '.start a', onClickStart).on('click', '.share a', onClickShare).on('click', 'h1 a', onClickLogo);
      app.$el.on('update', onUpdate);
    });
  });

}).call(this);
