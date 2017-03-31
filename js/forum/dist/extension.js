'use strict';

System.register('flarum/auth/cas/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('flarum-auth-cas', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('cas', m(
            LogInButton,
            {
              className: 'Button LogInButton--cas',
              icon: 'lock',
              path: '/auth/cas' },
            app.translator.trans('flarum-auth-cas.forum.log_in.with_cas_button')
          ));
        });
      });
    }
  };
});