import app from 'flarum/app';

import CASSettingsModal from 'flarum/auth/cas/components/CASSettingsModal';

app.initializers.add('flarum-auth-cas', () => {
  app.extensionSettings['flarum-auth-cas'] = () => app.modal.show(new CASSettingsModal());
});
