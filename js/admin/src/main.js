import app from 'flarum/app';

import CASSettingsModal from 'zhaoweizhong/auth/cas/components/CASSettingsModal';

app.initializers.add('zhaoweizhong-auth-cas', () => {
  app.extensionSettings['zhaoweizhong-auth-cas'] = () => app.modal.show(new CASSettingsModal());
});
