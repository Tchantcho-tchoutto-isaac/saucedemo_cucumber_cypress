import ProductsPage from '../pages/products.page';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let selectedProduct;

Given('je suis sur {string}', function (url) {
  cy.visit(url);
});

When('je saisis le username {string}', function (username) {
  cy.get('#user-name').type(username);
});
When('je saisi le password {string}', function (password) {
  cy.get('#password').type(password);
});

When('je clique sur le bouton {string}', function (buttonId) {
  cy.get(`#${buttonId}`).click();
});

Then('je suis redirigé au dashbord', function () {
  cy.url().should('include', '/inventory.html');
});

Then('je verifie la liste des produits', function () {
  ProductsPage.elements.productTitle().should('have.length.greaterThan', 0);
});

//Tri par nom AZ
When('je trie les produits par nom', function () {
  ProductsPage.selectionnerTriPar('az');
});

Then('je vérifie que les produits sont triés par nom', function () {
  ProductsPage.elements.productTitle().then(($products) => {
    const productNames = $products.toArray().map((el) => el.innerText);
    const sortedProductNames = [...productNames].sort((a, b) => a.localeCompare(b));
    expect(productNames).to.deep.equal(sortedProductNames);
  });
});

//Tri par prix bas-haut
When('je trie les produits par prix', () => {
  ProductsPage.selectionnerTriPar('lohi');
});

Then('je vérifie que les produits sont triés par prix', () => {
  ProductsPage.elements.productPrice().then(($prices) => {
    const productPrices = $prices.toArray().map((el) => parseFloat(el.innerText.replace('$', '')));
    const sortedProductPrices = [...productPrices].sort((a, b) => a - b);
    // expect(productPrices).to.deep.equal(sortedProductPrices);
    assert.deepEqual(productPrices, sortedProductPrices, 'Les produits ne sont pas triés par prix');

  });
});

//Addtocart
When('je clique sur {string}', (s) => {
  ProductsPage.selectRandomProduct().then((randomProduct) => {
    selectedProduct = randomProduct; // Stocker le produit sélectionné
    ProductsPage.recupererNomProduit(randomProduct).then((nomProduit) => {
      // Formater le nom du produit pour correspondre à l'attribut data-test
      const nomProduitFormate = nomProduit.toLowerCase().replace(/\s+/g, '-');
      ProductsPage.ajouterProduitAuPanier(nomProduitFormate);
    });
  });
});

//SupprimerProduit 
Then('le produit est ajouté au panier', () => {
  ProductsPage.verifierProduitAjoute();
})

When('je supprime le produit', () => {
  ProductsPage.selectRandomProduct().then((randomProduct) => {
    ProductsPage.recupererNomProduit(selectedProduct).then((nomProduit) => {
      const nomProduitFormate = nomProduit.toLowerCase().replace(/\s+/g, '-');
      ProductsPage.retirerProduitDuPanier(nomProduitFormate);
    });
  });
})

Then('le produit est bien supprimé du panier', () => {
  ProductsPage.verifierProduitSupprime();
})
