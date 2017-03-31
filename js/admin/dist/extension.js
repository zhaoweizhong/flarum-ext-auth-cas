'use strict';

System.register('flarum/auth/cas/components/CASSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, CASSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      CASSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(CASSettingsModal, _SettingsModal);

        function CASSettingsModal() {
          babelHelpers.classCallCheck(this, CASSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(CASSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(CASSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'CASSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('flarum-auth-cas.admin.cas_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-auth-cas.admin.cas_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-auth-cas.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('flarum-auth-cas.admin.cas_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('flarum-auth-cas.client_secret') })
            )];
          }
        }]);
        return CASSettingsModal;
      }(SettingsModal);

      _export('default', CASSettingsModal);
    }
  };
});;
'use strict';

System.register('flarum/auth/cas/main', ['flarum/app', 'flarum/auth/cas/components/CASSettingsModal'], function (_export, _context) {
  "use strict";

  var app, CASSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumAuthCASComponentsCASSettingsModal) {
      CASSettingsModal = _flarumAuthCASComponentsCASSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('flarum-auth-cas', function () {
        app.extensionSettings['flarum-auth-cas'] = function () {
          return app.modal.show(new CASSettingsModal());
        };
      });
    }
  };
});