(function() {
  window.RC = window.RC || {};

  window.RC.ViewModel = (function() {
    function ViewModel() {
      console.log("RC VIEMODEL");
    }

    ViewModel.prototype.bind = function(name, value, fn, validation) {
      if (fn == null) {
        fn = ko.observable;
      }
      if (validation == null) {
        validation = null;
      }
      if (this[name]) {
        this[name](value);
      } else {
        this[name] = fn(value);
      }
      return this[name];
    };

    ViewModel.prototype.bindProperty = function(name, value, validation) {
      return this.bind(name, value, ko.observable, validation);
    };

    ViewModel.prototype.bindComputed = function(name, value) {
      if (this[name] == null) {
        this[name] = ko.computed(value);
      }
      return this[name];
    };

    ViewModel.prototype.bindArray = function(name, value) {
      if (value == null) {
        value = [];
      }
      return this.bind(name, value, ko.observableArray);
    };

    return ViewModel;

  })();

}).call(this);

(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RC.AppViewModel = (function(_super) {
    __extends(AppViewModel, _super);

    function AppViewModel() {
      this.init = __bind(this.init, this);
      this.attachEvents = __bind(this.attachEvents, this);
      this.rebind = __bind(this.rebind, this);
      this.subscribe = __bind(this.subscribe, this);
      this.submitContactForm = __bind(this.submitContactForm, this);
    }

    AppViewModel.prototype.subscribe = function() {};

    AppViewModel.prototype.rebind = function() {};

    AppViewModel.prototype.submitContactForm = function(e) {
      var name = $('#contact-name').val();
      var mail = $('#contact-mail').val();
      var message = $('#contact-message').val();
      var $contactBtn = $('#contact-btn');

      $contactBtn.html('Sending...').addClass('disabled');

      $.ajax({
          url: "//forms.brace.io/rick@rickfrom1987.com", 
          method: "POST",
          data: {
            from: name,
            reply: mail,
            message: message
          },
          dataType: "json"
      }).done(function(resp){
        if(resp.success) {
          $contactBtn.html('Yay. Your message has been sent!');
        } else {
          $contactBtn.html('Oops. Something went wrong. Try Again?').removeClass('disabled')
        }

      });
    };

    AppViewModel.prototype.attachEvents = function() {
      var self = this;
      
      $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 50) {
          return $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
          return $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
      });

      $('.page-scroll').click(function() {
        var destination = $(this).data('scroll-to');
        $('html, body').animate({
            scrollTop: $('.' + destination).offset().top
        }, 2000);
      });

      $('#contact-btn').click(function(e){
        $('#contact-form').validate({ // initialize the plugin
            rules: {
                contact: {},
                email: {
                    required: true,
                    email: true
                },
                comments: {
                    required: true,
                    minlength: 1
                },
            },
            submitHandler: function (form) { // for demo
                e.preventDefault();
                self.submitContactForm();
                return false; // for demo
            }
        });
      });
    };

    AppViewModel.prototype.init = function() {
      this.rebind();
      this.subscribe();
      this.attachEvents();
    };

    return AppViewModel;

  })(RC.ViewModel);

}).call(this);

(function() {
  $(document).ready(function() {
    var viewModel;
    viewModel = new RC.AppViewModel();
    viewModel.init();
    ko.applyBindings(viewModel);
  });

}).call(this);