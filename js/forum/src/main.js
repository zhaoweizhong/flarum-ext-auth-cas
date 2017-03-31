import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('zhaoweizhong-auth-cas', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('cas',
      <LogInButton
        className="Button LogInButton--cas"
        icon="lock"
        path="/auth/cas">
        {app.translator.trans('flarum-auth-cas.forum.log_in.with_cas_button')}
      </LogInButton>
    );
  });
});
