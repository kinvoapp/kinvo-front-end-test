/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const istanbul = require('istanbul-lib-coverage');

const map = istanbul.createCoverageMap({});

Cypress.on('window:before:unload', (e) => {
  const coverage = e.currentTarget.__coverage__;

  if (coverage) {
    map.merge(coverage);
  }
});

after(() => {
  cy.window().then((win) => {
    const coverage = win.__coverage__;

    if (coverage) {
      map.merge(coverage);
    }

    cy.writeFile('.nyc_output/out.json', JSON.stringify(map));
    cy.exec('nyc report --reporter=html --reporter=lcov');
  });
});
