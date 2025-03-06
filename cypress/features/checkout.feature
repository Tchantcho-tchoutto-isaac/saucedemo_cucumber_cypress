@Checkout
Feature: Checkout Process

  Scenario: Vérifier que l'utilisateur peut compléter un achat
    Given l'utilisateur est sur la page de connexion
    When il se connecte avec des identifiants valides
    And il ajoute un produit au panier
    And il accède au panier et clique sur Checkout
    And il renseigne ses informations de livraison
    And il valide la commande
    Then il voit le message de confirmation de commande
