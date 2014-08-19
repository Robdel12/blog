import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FrontEndENV.locationType
});

Router.map(function() {
  this.route("about");
  this.route('login');
  this.resource("create", function(){
    this.route("new");
  });
  this.resource('posts', function() {
    this.route('show', {path: '/:post_slug'});
  });
});

export default Router;
