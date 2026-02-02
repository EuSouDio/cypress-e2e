/// <reference types='Cypress'/>

const elTestCases = require('./elements').ELEMENTS

class TestCases {

    clickbutonTestCases() {
        cy.get(elTestCases.btnTestCases).click(); 
    }

    validateTestCasePage() {
        cy.get(elTestCases.msgTestCasesPage).should('contain','Test Cases');
    }

}

export default new TestCases()