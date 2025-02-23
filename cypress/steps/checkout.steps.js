import cartPage from '../pages/cart.page';
import checkoutCompletePage from '../pages/checkout.complete.page';
import checkoutinformationpagePage from '../pages/checkoutinformationpage.page';
import CheckoutOvervieuwPage from '../pages/CheckoutOvervieuw.page';
import loginPage from '../pages/login.page';
import productsPage from '../pages/products.page';
import ProductsPage from '../pages/products.page';
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";




Given("l'utilisateur est sur la page de connexion", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("il se connecte avec des identifiants valides", () => {
  loginPage.login("standard_user", "secret_sauce");
});

When("il ajoute un produit au panier", () => {
  productsPage.clickAddToCart();

});

When("il accède au panier et clique sur Checkout", () => {
  productsPage.allerAuPanier();
  cartPage.clickCheckoutButton();
});

When("il renseigne ses informations de livraison", () => {
  checkoutinformationpagePage.completeCheckoutInformation("John","Doe","75000" )
  
});

When("il valide la commande", () => {

  CheckoutOvervieuwPage.cliquersurleButtonfinish();
  
});

Then("il voit le message de confirmation de commande", () => {
  checkoutCompletePage.getOrderConfirmationMessage().should("be.visible");
});
