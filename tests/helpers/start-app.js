import Ember from 'ember';
import registerA11yHelpers from './a11y/register-a11y-helpers';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';
import initializeTestHelpers from 'simple-auth-testing/test-helpers';
initializeTestHelpers();

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    registerA11yHelpers();
    application.injectTestHelpers();
  });

  return application;
}
