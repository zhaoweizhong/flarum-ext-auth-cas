var gulp = require('flarum-gulp');

gulp({
  modules: {
    'flarum/auth/cas': 'src/**/*.js'
  }
});
