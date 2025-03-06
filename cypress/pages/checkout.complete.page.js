

class ChekoutCompletePage{
    elements = {

        backButton: ()=> cy.get('#back-to-products')
        
    }

    clickBack(){

        cy.elements.backButton().click();

    }
    
    getOrderConfirmationMessage() {
        return cy.contains("Thank you for your order"); // ✅ Retourne l'élément mais ne vérifie pas
      }
}

export default new ChekoutCompletePage;