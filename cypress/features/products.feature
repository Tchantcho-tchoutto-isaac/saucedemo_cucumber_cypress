Feature: Produits

  @VerificationList
  Scenario: Verification de list de produits
    Given je suis sur "https://www.saucedemo.com/"
    When j-e saisis le username "standard_user"
    And je saisi le password "secret_sauce"
    And je clique sur le bouton "login-button"
    Then je suis redirigé au dashbord
    Then je verifie la liste des produits

    @Tri
  Scenario: Verification du tri des produits par nom
    Given je suis sur "https://www.saucedemo.com/"
    When j-e saisis le username "standard_user"
    And je saisi le password "secret_sauce"
    And je clique sur le bouton "login-button"
    Then je suis redirigé au dashbord
    When je trie les produits par nom
    Then je vérifie que les produits sont triés par nom

     @Tri
  Scenario: Verification du tri des produits par prix (bas à haut)
    Given je suis sur "https://www.saucedemo.com/"
    When j-e saisis le username "standard_user"
    And je saisi le password "secret_sauce"
    And je clique sur le bouton "login-button"
    Then je suis redirigé au dashbord
    When je trie les produits par prix
    Then je vérifie que les produits sont triés par prix

# @AddToCart
#   Scenario: Ajout d'un produit au panier
#     Given je suis sur "https://www.saucedemo.com/"
#     When je saisis le username "standard_user"
#     And je saisi le password "secret_sauce"
#     And je clique sur le bouton "login-button"
#     Then je suis redirigé au dashbord
#     When je clique sur "Add to cart" pour le premier produit
#     Then le produit est ajouté au panier
# @RemoveProduct
#   Scenario: Suppression d'un produit du panier
#     Given je suis sur "https://www.saucedemo.com/"
#     When je saisis le username "standard_user"
#     And je saisi le password "secret_sauce"
#     And je clique sur le bouton "login-button"
#     When je clique sur "Add to cart" pour le premier produit
#     And je vais dans le panier
#     And je supprime le premier produit du panier
#     Then le produit est bien supprimé du panier
