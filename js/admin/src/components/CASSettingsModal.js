import SettingsModal from 'flarum/components/SettingsModal';

export default class CASSettingsModal extends SettingsModal {
  className() {
    return 'CASSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('flarum-auth-cas.admin.cas_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('flarum-auth-cas.admin.cas_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-auth-cas.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('flarum-auth-cas.admin.cas_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('flarum-auth-cas.client_secret')}/>
      </div>
    ];
  }
}
