import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'react': '16.x',
  'react-dom': '16.x',
  'react-router': '3.x'
}, 'reactrouter:react-router-ssr');

if (Meteor.isClient) {
  ReactRouterSSR = require('./client.jsx').default;
} else {
  ReactRouterSSR = require('./server.jsx').default;
}
