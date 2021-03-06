'use strict';

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const fs = require('fs');

const allRoutes = [];

fs.readdirSync(__dirname).forEach((file) => {
  if (file === 'index.js') {
    return;
  }

  const routes = require(`${__dirname}/${file}`);
  allRoutes.push(...routes);
});

module.exports = allRoutes;
