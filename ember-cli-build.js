'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');

module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');
  let app = new EmberApp(defaults, {
    svgJar: {
      sourceDirs: ['public/assets', 'node_modules/@ember-eui/core/vendor/icon'],
    },
  });

  return compatBuild(app, buildOnce);
};
