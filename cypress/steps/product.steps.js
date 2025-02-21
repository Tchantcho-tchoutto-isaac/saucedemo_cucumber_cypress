import ProductsPage from '../pages/product.page';
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('je suis sur {string}', function (url) {
  cy.visit(url);
});

When('j-e saisis le username {string}', function (username) {
  cy.get('#user-name').type(username);
});
When('je saisi le password {string}', function (password) {
  cy.get('#password').type(password);
});

When('je clique sur le bouton {string}', function (buttonId) {
  cy.get(`#${buttonId}`).click();
});

Then('je suis redirigé au dashbord', function () {
  cy.url().should('include', '/inventory.html'); // Vérifie que l'URL contient le bon path
});

Then('je verifie la liste des produits', function () {
  ProductsPage.elements.productTitle().should('have.length.greaterThan', 0);
});
